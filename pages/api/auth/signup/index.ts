import User from "@/models/User";
import bcrypt from "bcrypt";
import { connect } from "@/lib/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import Token from "@/models/Token";
import { generateRandomString } from "@/lib";
import { sendEmail } from "@/lib/sendEmail/sendEmail";

connect();
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    const token = await new Token({
      userId: user._id,
      token: generateRandomString(32),
    });
    token.save();

    const url = `${process.env.BASE_URL}/api/users/${user._id}/verify/${token.token}`;
    console.log(process.env.GMAIL_ID);

    await sendEmail(user.email, "Verify Email", url);

    res.setHeader(
      "Set-Cookie",
      `signingup=true; HttpOnly; Max-Age=3600; Path=/; Same-Site=Strict`
    );

    return res.status(201).json({ message: "Please verify your account now.", success: true });
  }

  return res.status(400).json({ message: "Something went wrong" });
}
