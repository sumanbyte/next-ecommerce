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
    case "PATCH":
      return handlePatch(req, res);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {

  
  
}
async function handleGet(req: NextApiRequest, res: NextApiResponse) {}

async function handlePatch(req: NextApiRequest, res: NextApiResponse) {}
