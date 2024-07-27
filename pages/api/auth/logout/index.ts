import { connect } from "@/lib/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";

connect();
export default async function GET(req:NextApiRequest, res:NextApiResponse){
    try {

        res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);

        return res.status(200).json({ message: "Logout successful" })        
    } catch (error) {
        return res.status(500).json({message: "Something went wrong."})
    }
}