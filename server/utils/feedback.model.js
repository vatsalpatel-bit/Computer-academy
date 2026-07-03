import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true,
        min: 1,
        max: 5,
    }
});

export const Feedback = mongoose.model('Feedback', feedbackSchema);