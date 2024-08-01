import { connect } from "@/lib/dbConfig/dbConfig";
import Token from "@/models/Token";
import { NextApiRequest, NextApiResponse } from "next";

connect();
export default async function GET(req: NextApiRequest, res: NextApiResponse){
    const {userid, token} = req.query;

    if(!userid || !token){
        return res.status(400).json({message: "provide userid and token"});
    }

    const dbToken = await Token.find({userId: userid, token});
    
    console.log(dbToken);
    if(!dbToken){
        return res.status(400).json({message: "Invalid link"})
    }

    res.setHeader(
        "Set-Cookie",
        "forgetpassword=true; HttpOnly; Max-Age=3600; Path=/; Same-Site=Strict"
      )

    //redirect to frontend endpoint /changepassword
    return res.redirect(302,`/changepassword?token=${token}&userId=${userid}`);


}