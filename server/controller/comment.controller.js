import z from "zod";
import { Feedback } from "../utils/feedback.model.js";

export const feedback = async (req, res) => {
    try {
        const feedbackSchema = z.object({
            name: z
                .string()
                .min(3, "name must be at least 3 characters")
                .max(100, "name title cannot exceed 100 characters"),
            comment: z
                .string()
                .min(20, "comment must be at least 20 characters")
                .max(2000, "comment cannot exceed 2000 characters"),
            rating: z
                .number()
                .min(1, "Please select a rating")
                .max(5, "Rating cannot be more than 5"),
        });

        const result = feedbackSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                success: false,
                error: result.error.issues,
            })
        }

        const { name, comment, rating } = result.data;

        const feedback = await Feedback.create({
            name,
            comment,
            rating,
        })

        return res.status(200).json({
            feedback,
            message: "feedback sent",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "server error",
            success: true,
        })
    }
}

export const getAllFeedback = async (req, res) => {
    try {
        const allFeedback = await Feedback.find();
        return res.status(200).json({
            allFeedback,
            success: true,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        })
    }
}