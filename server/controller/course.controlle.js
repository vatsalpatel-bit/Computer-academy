import { Course } from "../utils/course.model.js"

export const getCourse = async (req, res) => {
    try {
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

export const getLatestCourse = async (req, res) => {
    try {
        const course = await Course.find().limit(4);

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

export const getAllCourse = async (req, res) => {
    try {
        const { page = 1, duration, debounceSearch = "", limit = 8 } = req.query;

        const pageNumber = Number(page);
        const limitNumber = Number(limit);

        const skip = (pageNumber - 1) * limitNumber;

        const query = {};

        if (debounceSearch) {
            query.title = {
                $regex: debounceSearch,
                $options: "i",
            };
        }

        if (duration) {
            query.duration = duration;
        }

        const course = await Course.find(query)
            .skip(skip)
            .limit(limitNumber);

        const total = await Course.countDocuments(query);

        return res.status(200).json({
            success: true,
            course,
            total,
            totalPage: Math.ceil(total / limitNumber),
            currentPage: pageNumber,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        })
    }
}

export const getAllCourseTitle = async (req, res) => {
    try {
        const course = await Course.find().select("title");
       
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            })
        }

        return res.status(200).json({
            course,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        })
    }
}