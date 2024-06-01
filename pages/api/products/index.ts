import { connect } from "@/lib/dbConfig/dbConfig"
import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";


connect();
export default async function GET(req:NextApiRequest, res:NextApiResponse){
    const products = await Product.find({});

    if(products){
        return res.status(200).json(products)
    }else{
        return res.status(400).json({message: "failed to fetch."})
    }

}