import { NextApiRequest, NextApiResponse } from "next";


export default async function GET(req:NextApiRequest, res:NextApiResponse){
    try {

        res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);

        // Send response indicating successful logout
        return res.status(200).json({ message: "Logout successful" });        
    } catch (error) {
        return res.status(500).json({message: "Something went wrong."})
    }
}