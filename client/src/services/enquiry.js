import axios from 'axios';

export const sendEnquiryApi = async (input) => {
  const res = await axios.post('/api/v1/enquiry', input);
  return res.data;
};
