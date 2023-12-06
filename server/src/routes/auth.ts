import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import { JWT_SECRET_KET } from "../env";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            password,
        });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token for the new user
        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, JWT_SECRET_KET, { expiresIn: "1h" });

        res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET_KET, { expiresIn: "1h" });

        res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
