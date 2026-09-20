import axios from 'axios';

export const feedbackApi = async (input, rating) => {
  const res = await axios.post(`${import.meta.env.BACKEND_URL}/api/v1/feedback`, {
    name: input.name,
    comment: input.comment,
    rating,
  });

  return res.data;
};

export const getAllFeedback = async () => {
  const res = await axios.get(`${import.meta.env.BACKEND_URL}/api/v1/get/feedback`);
  return res.data;
};
