import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password || !role)
      return res.status(400).json({ message: "All feilds are necessarilly" });

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedpass = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedpass,
      role,
    });

    await user.save();
    res.status(201).json({
      message: "user created successfully",
      data: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required",
      });
    }

    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ message: "user not exist" });

    const isMathched = await bcrypt.compare(password, user.password);

    if (!isMathched)
      return res
        .status(400)
        .json({ message: "user not validate, enter correct pwd" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // 5️⃣ Send token
    res.status(200).json({
      message: "Login successful",
      token,
    });
    res.status(201).json({ message: "Login successfully" });
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "server error", error });
  }
};
