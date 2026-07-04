import CourseBanner from '@/components/student/courses/CourseBanner'
// import CourseCard from '@/components/student/courses/CourseCard'
import CourseFilter from '@/components/student/courses/CourseFilter'
import CourseList from '@/components/student/courses/CourseList'
// import WhyLearn from '@/components/student/courses/WhyLearn'
import React from 'react'

const Courses = () => {
    return (
        <>
            <CourseBanner />
            {/* <CourseCard /> */}
            <CourseFilter />
            <CourseList />
            {/* <WhyLearn /> */}
        </>
    )
}

export default Courses
