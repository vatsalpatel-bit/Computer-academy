import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import feedbackRouter from './router/feedback.router.js';
import courseRouter from './router/course.router.js';
import enquiryRouter from './router/enquiry.router.js';
const app = express();
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/+$/, ''))
  .filter(Boolean);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin(origin, callback) {
      // Requests proxied through Vite and non-browser clients have no Origin.
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Origin is not allowed by CORS'));
    },
    credentials: true,
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

app.use('/api/v1', feedbackRouter);
app.use('/api/v1', courseRouter);
app.use('/api/v1', enquiryRouter);

export default app;
