import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true,
  },
 
});


const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;