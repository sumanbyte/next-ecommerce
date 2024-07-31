import { connect } from "@/lib/dbConfig/dbConfig";
import Token from "@/models/Token";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";



connect();
export default async function POST(req:NextApiRequest, res: NextApiResponse){
    const {password, token, userId} = req.body;

    if(!token || !password){
        return res.status(400).json({message: "please provide token and password"})
    }

    const dbToken = await Token.findOne({token, userId});

    if(!dbToken){
        return res.status(400).json({message: "invalid link"})
    }

    const user = await User.findOne({_id: userId});

    if(!user){
        return res.status(400).json({message: "User doesn't exists"});
    }

    const updateResult = await User.findByIdAndUpdate(userId, {password});

    if(updateResult){
        await Token.deleteOne({token, userId});
        return res.status(201).json({success: true, message: "password updated successfully"})
    }else{
        return res.status(400).json({message: "password update failed."})
    }


}