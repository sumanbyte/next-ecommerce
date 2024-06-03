import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
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