import { createSlice } from "@reduxjs/toolkit";


const feedbackSlices = createSlice({
    name: "feedback",
    initialState: {
        allFeedback: [],
    },
    reducers: {
        setAllFeddback: (state, action) => {
            state.allFeedback = action.payload
        },

    }
});

export const { setAllFeddback } = feedbackSlices.actions;
export default feedbackSlices.reducer;