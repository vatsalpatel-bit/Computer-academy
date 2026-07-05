import axios from "axios"

export const getCourseApi = async (slug) => {
    const res = await axios.get(`http://localhost:3000/api/v1/${slug}`);
    return res.data;
}

export const getLatestCourse = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/get/courses");
    return res.data;
}
export const getAllCourse = async (debounceSearch,
    page,
    duration,
    limit,) => {
    const res = await axios.get("http://localhost:3000/api/v1/get/all/courses", {
        params: {
            debounceSearch,
            page,
            duration,
            limit,
        }
    });
    return res.data;
}