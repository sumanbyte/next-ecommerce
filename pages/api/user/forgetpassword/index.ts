import { generateRandomString } from "@/lib";
import { connect } from "@/lib/dbConfig/dbConfig";
import { sendEmail } from "@/lib/sendEmail/sendEmail";
import Token from "@/models/Token";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";



connect();
export default async function POST(req: NextApiRequest, res: NextApiResponse){
    const {email} = req.body;
    
    if(!email){
        return res.status(400).json({message: "Please provide a email address"});
    }

    const dbUser = await User.findOne({email});

    if(!dbUser){
        return res.status(400).json({message: "Email address doesn't exists."})
    }

    const token = new Token({
        userId: dbUser._id,
        token: generateRandomString(32)
    });
    token.save();

    const url = `${process.env.BASE_URL}/api/user/forgetpassword/${dbUser._id}/reset/${token.token}`;

    await sendEmail(email, "Forget Password Instructions", url);

    return res.status(200).json({success: true, message: "Forget password Instructions sent to email"})
}

/*
Flow:
* request for forgetpassword(send email): /forgetpassword 
* when user clicks on email link: /forgetpassword/userid/reset/token
    * This click redirects user back to /changepassword?token=fyz&userid=nice frontend endpoint
* changepassword frontend endpoint transfers new password, userid and token to /changepassword api. it changes the user password.
*/