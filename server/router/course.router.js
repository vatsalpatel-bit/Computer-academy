import { getCourse, getLatestCourse } from "../controller/course.controlle.js";
import express from "express"
import Router from "express";

const router = express.Router();

router.get("/:slug", getCourse);
router.get("/get/course", getLatestCourse)

export default router;