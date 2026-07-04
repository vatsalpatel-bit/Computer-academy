import { Course } from "../utils/course.model.js"

export const getCourse = async (req, res) => {
    try {
        console.log(req.params.slug)
        const course = await Course.find({
            slug: req.params.slug,
        });

        if (!course) {
            return res.status(404).json({
                message: "Course not found",
                success: false,
            })
        }

        return res.status(200).json({
            course,
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