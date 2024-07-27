import Cart from "@/models/Cart";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const { quantity } = req.body;

  const {
    query: { productId },
  } = req;

  const userInfo = req.headers["user"];
  let userData;

  if (userInfo) {
    userData = JSON.parse(userInfo as string);
  }

  const userId = userData.id;

  if (!productId) {
    return res
      .status(400)
      .json({ message: "A Valid productId id is required" });
  }

  const isValid = mongoose.Types.ObjectId.isValid(productId.toString());
  if (!isValid) {
    return res.status(400).json({ message: "Invalid productId" });
  }

  if (typeof quantity !== "string") {
    return res
      .status(400)
      .json({ message: "quantity must be type of string." });
  }

  if (quantity != "INCREASE_QUANTITY" && quantity != "DECREASE_QUANTITY") {
    return res.status(400).json({ message: "invalid quantity specifier" });
  }

  const dbCart = await Cart.findOne({ productId, userId });

  if (!dbCart) {
    return res.status(400).json({ message: "Product not found" });
  }

  let currentQuantity = dbCart.quantity;

  if (quantity === "INCREASE_QUANTITY") {
    if (currentQuantity > 0) {
      currentQuantity++;
    }
  } else {
    if (currentQuantity > 1) {
      currentQuantity--;
    }
  }

  const data = await Cart.updateOne(
    { _id: dbCart._id },
    { quantity: currentQuantity }
  );

  if (data.modifiedCount === 0) {
    return res.status(200).json({ message: "Failed to update the quantity" });
  }

  return res.status(200).json({ message: "Successfully updated the quantity" });
}
