import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connect } from "@/lib/dbConfig/dbConfig";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    await connect();
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    if (await bcrypt.compare(password, userExists.password)) {
      if(!userExists.verified){
        return res.status(400).json({message: "User is not verified"});
      }
      const tokenData = {
        id: userExists._id,
        name: userExists.name,
        email: userExists.email,
      };
      const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
        expiresIn: "1D",
      });
      res.setHeader(
        "Set-Cookie",
        `token=${token}; HttpOnly; Max-Age: ${
          60 * 60 * 24
        }; Path=/; Same-Site=Strict`
      );
      return res.status(200).json({ message: "Login Successful" });
    }else{
        return res.status(400).json({message: "Incorrect password"})
    }
  }

  return res.status(400).json({ message: "User doesn't exists." });
}
