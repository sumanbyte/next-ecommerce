import User from "@/models/User";
import bcrypt from "bcrypt";
import { connect } from "@/lib/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

connect()
export default async function POST(req: NextApiRequest, res: NextApiResponse){
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "All fields are required"})
    }

    const userExists = await User.findOne({email});

    if(userExists){
        return res.status(400).json({message: "User already exists."})
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({name, email, password: hashedPassword});

    const tokenData = {
        id: user._id,
        name: user.name,
        email: user.email
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn: "1D"});

    

    if(user){
        res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}; SameSite=Strict;`)
        return res.status(201).json({message: "User created successfully"})
    }

    return res.status(400).json({message: "Something went wrong"});

}