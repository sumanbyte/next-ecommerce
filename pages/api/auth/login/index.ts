import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'


export default async function POST(req: NextApiRequest, res:NextApiResponse){
    const {email, password} = req.body;


    if(!email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    const userExists = await User.findOne({email});

    const tokenData = {
        id: userExists._id,
        name: userExists.name,
        email: userExists.email
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn: "1D"});

    if(userExists){
        res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Max-Age: ${60 * 60 * 24}; Path=/; Same-Site=Strict`);
        return res.status(200).json({message: "Login Successful"});
    }

    return res.status(400).json({message: "user doesn't exists."})
}