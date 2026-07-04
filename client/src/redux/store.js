import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "@/redux/slices/feedbackSlices.js"
import courseReducer from "@/redux/slices/courseSlices.js"


const store = configureStore({
    reducer: {
        feedback: feedbackReducer,
        course: courseReducer,
    },
    devTools: true,
})

export default store;