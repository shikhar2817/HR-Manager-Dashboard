import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_DB_URL = process.env.MONGO_DB_URL || "";
const JWT_SECRET_KET = process.env.JWT_SECRET_KET || "";
export { PORT, MONGO_DB_URL, JWT_SECRET_KET };
