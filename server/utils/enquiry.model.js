import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
