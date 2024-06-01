import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
 
});


const Checkout = mongoose.models.Checkout || mongoose.model("Checkout", checkoutSchema);

export default Checkout;