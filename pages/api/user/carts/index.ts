import { connect } from "@/lib/dbConfig/dbConfig";
import Cart from "@/models/Cart";
import { NextApiRequest, NextApiResponse } from "next";

connect();
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    case "GET":
      return handleGet(req, res);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const cartData = req.body;
  
  const data = await Cart.find({}).populate("productId");

  try {
   const response = await Cart.insertMany(cartData);

    if (response) {
      return res
        .status(200)
        .json({ message: "Products inserted successfully", carts: data });
    } else {
      return res
        .status(400)
        .json({ message: "Failed to insert the products.", carts: data });
    }
  } catch (e) {
    return res
      .status(400)
      .json({ message: "Failed to insert the products error.", carts: data});
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const cartsData = await Cart.find({}).populate("productId");
  
  try{
    if (cartsData) {
      return res
        .status(200)
        .json({ message: "got data successfully", carts: cartsData });
    } else {
      return res.status(400).json({ message: "data failed to fetch" });
    }

  }catch(e){
    console.log(e)
  }
}
