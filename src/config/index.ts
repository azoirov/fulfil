import {config} from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "..", ".env") });

export const { MONGO_URI } = process.env;

