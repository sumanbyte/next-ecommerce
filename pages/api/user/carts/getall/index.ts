import { connect } from "@/lib/dbConfig/dbConfig";
import Cart from "@/models/Cart";
import { NextApiRequest, NextApiResponse } from "next";


connect();

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const cartsData = await Cart.find({})
    
    try{
      if (cartsData) {
        return res
          .status(200)
          .json({ carts: cartsData });
      } else {
        return res.status(400).json({ message: "data failed to fetch" });
      }
  
    }catch(e){
      console.log(e)
    }
  }
  