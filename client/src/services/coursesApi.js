import axios from "axios"

export const getCourseApi = async (slug) => {
    const res = await axios.get(`http://localhost:3000/api/v1/${slug}`);
    return res.data;
}

export const getLatestCourse = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/get/course");
    return res.data;
}