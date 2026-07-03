import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import feedbackRouter from "./router/feedback.router.js"


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use("/api/v1", feedbackRouter);

export default app;

