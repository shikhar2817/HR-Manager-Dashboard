import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KET } from "../env";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KET);
        //req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Forbidden" });
    }
};
