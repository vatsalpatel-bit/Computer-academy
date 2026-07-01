import CourseBanner from '@/components/student/courses/CourseBanner'
import CourseCard from '@/components/student/courses/CourseCard'
import CourseCTA from '@/components/student/courses/CourseCTA'
import CourseFilter from '@/components/student/courses/CourseFilter'
import CourseList from '@/components/student/courses/CourseList'
import WhyLearn from '@/components/student/courses/WhyLearn'
import React from 'react'

const Courses = () => {
    return (
        <>
            <CourseBanner />
            <CourseCard />
            <CourseCTA />
            <CourseFilter />
            <CourseList />
            <WhyLearn />
        </>
    )
}

export default Courses
