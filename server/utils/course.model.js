import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: String,

    fees: Number,

    level: String,

    language: String,

    batch: String,

    certificate: Boolean,

    topics: [String],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model('Course', courseSchema);
