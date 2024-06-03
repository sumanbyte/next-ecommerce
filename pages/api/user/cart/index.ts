import { connect } from "@/lib/dbConfig/dbConfig";
import Cart from "@/models/Cart";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

connect();
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    case "GET":
      return handleGet(req, res);
    case "PATCH":
      return handlePatch(req, res);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const {productId, quantity} = req.body;

  // console.log(req.body);

  const isValid = mongoose.Types.ObjectId.isValid(productId);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid productId" });
  }

  const existingCart = await Cart.findOne({ productId });
  if (existingCart) {
    return res.status(400).json({ message: "Item already in cart" });
  }

  const cart = new Cart({ productId, quantity }); 
  await cart.save();

  return res.status(201).json({ message: "Cart created" });
  
  
}
async function handleGet(req: NextApiRequest, res: NextApiResponse) {}

async function handlePatch(req: NextApiRequest, res: NextApiResponse) {}
