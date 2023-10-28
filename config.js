import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.port;

export const mongoDBURL = process.env.db;
