import express from "express"
import Router from "express";
import { sendEnquiry } from "../controller/enquiry.controller.js";

const router = express.Router();
router.post("/enquiry", sendEnquiry);

export default router;