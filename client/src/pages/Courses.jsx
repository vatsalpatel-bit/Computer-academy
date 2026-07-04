import CourseBanner from '@/components/student/courses/CourseBanner'
import CourseFilter from '@/components/student/courses/CourseFilter'
import CourseList from '@/components/student/courses/CourseList'

import React from 'react'

const Courses = () => {
    return (
        <>
            <CourseBanner />
            <CourseFilter />
            <CourseList />
        </>
    )
}

export default Courses
