import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        allCourses: [],
        singleCourse: null,
        latestCourse: [],
        allCoursesTitle: [],
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
        },
        setAllCoursesTitle: (state, action) => {
            state.allCoursesTitle = action.payload
        }
    }
});

export const { setAllCourses, setSingleCourse, setLatestCourse, setAllCoursesTitle } = courseSlice.actions;
export default courseSlice.reducer;