import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "@/redux/slices/feedbackSlices.js"

const store = configureStore({
    reducer: {
        feedback: feedbackReducer,
    },
    devTools: true,
})

export default store;