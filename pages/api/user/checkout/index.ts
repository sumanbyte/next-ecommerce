import Checkout from "@/models/Checkout";


export default async function POST(req: any, res: any) {
  const {productId, quantity} = req.body;
  console.log(productId, quantity);
}
