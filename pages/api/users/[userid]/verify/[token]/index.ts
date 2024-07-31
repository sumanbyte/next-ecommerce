import { connect } from "@/lib/dbConfig/dbConfig";
import Token from "@/models/Token";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

connect();
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userid, token } = req.query;

    const user = await User.findOne({ _id: userid });

    if (!user) return res.status(400).json({ message: "Invalid link user" });

    const dbToken = await Token.findOne({
      userId: userid,
      token: token,
    });

    if (!dbToken) return res.status(400).json({ message: "Invalid link token" });

    await User.findByIdAndUpdate(user._id, {verified: true});

    await Token.deleteOne({_id: dbToken._id});
    
    // for one time access to welcome page.
    res.setHeader(
      "Set-Cookie",
      "verified=true; HttpOnly; Max-Age=3600; Path=/; Same-Site=Strict"
    )
    res.redirect(302, "/welcome");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
