import Branches from '@/components/student/home/Branches';
import Features from '@/components/student/home/Features';
import FeedbackForm from '@/components/student/home/FeedbackForm';
import Gallery from '@/components/student/home/Gallery';
import Hero from '@/components/student/home/Hero';
import PopularCourses from '@/components/student/home/PopularCourses';
import Testimonials from '@/components/student/home/Testimonials';
import React from 'react'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <PopularCourses />
            <Branches />
            <Gallery />
            <Testimonials />
            <FeedbackForm />
        </>
    );
};

export default Home;
