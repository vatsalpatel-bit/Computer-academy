import Branches from '@/components/student/home/Branches';
import Features from '@/components/student/home/Features';
import Gallery from '@/components/student/home/Gallery';
import Hero from '@/components/student/home/Hero';
import PopularCourses from '@/components/student/home/PopularCourses';
import React from 'react'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <PopularCourses />
            <Branches />
            <Gallery />
        </>
    );
};

export default Home;
