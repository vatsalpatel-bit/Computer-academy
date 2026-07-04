import axios from "axios"

export const getCourseApi = async (slug) => {
    const res = await axios.get(`http://localhost:3000/api/v1/${slug}`);
    return res.data;
}