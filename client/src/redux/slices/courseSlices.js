import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        allCourses: [],
        singleCourse: null,
        latestCourse: [],
    },
    reducers: {
        setAllCourses: (state, action) => {
            state.allCourses = action.payload;
        },
        setSingleCourse: (state, action) => {
            state.singleCourse = action.payload;
        },
        setLatestCourse: (state, action) => {
            state.latestCourse = action.payload
        }
    }
});

export const { setAllCourses, setSingleCourse, setLatestCourse } = courseSlice.actions;
export default courseSlice.reducer;