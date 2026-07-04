import { getCourse } from "../controller/course.controlle.js";
import express from "express"
import Router from "express";

const router = express.Router();

router.get("/:slug", getCourse);

export default router;