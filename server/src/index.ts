import { Request, Response } from "express";
import cors from "cors";
import { MONGO_DB_URL, PORT } from "./env";
import expressConfig from "./express.config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import { authenticateJWT } from "./middlewares/authenticate";

const app = expressConfig();

// CORS SETUP

app.use(
    cors({
        credentials: true,
    })
);
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Server Running on Port " + PORT));

mongoose.Promise = Promise;
mongoose
    .connect(MONGO_DB_URL)
    .then((d: typeof mongoose) => console.log("Database connected succesfully:", d.connection.name))
    .catch((e: Error) => console.log(e));

app.get("/api/health", (_req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "System is healthy 🟢" });
    } catch (error: unknown) {
        console.log("Server Failed: ", error);
        res.status(500).json({ message: "System is Sick 🔴" });
    }
});

app.use("/api/auth", authRouter);
app.use("/api/users", authenticateJWT, userRouter);
