import Features from '@/components/student/home/Features';
import Hero from '@/components/student/home/Hero';
import PopularCourses from '@/components/student/home/PopularCourses';
import React from 'react'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <PopularCourses />
        </>
    );
};

export default Home;
