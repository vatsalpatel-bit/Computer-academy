import { feedback, getAllFeedback } from "../controller/comment.controller.js";
import express, { Router } from "express";

const router = express.Router();

router.post("/feedback", feedback);
router.get("/get/feedback", getAllFeedback)

export default router;