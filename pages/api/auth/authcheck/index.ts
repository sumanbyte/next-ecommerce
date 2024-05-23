import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";


export default async function GET(req:NextApiRequest, res:NextApiResponse){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({isAuthenticated: false, message: "You are not Authenticated."})
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET!);
        return res.status(200).json({isAuthenticated: true, message: "You are Authenticated"});
    }catch(error:any){
        return res.status(401).json({isAuthenticated: false});
    }
}