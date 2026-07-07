import axios from "axios"

export const sendEnquiryApi = async (input) => {
    const res = await axios.post("http://localhost:3000/api/v1/enquiry", input);
    return res.data;
}