import Branches from '@/components/student/home/Branches';
import CallToAction from '@/components/student/home/CallToAction';
import Faq from '@/components/student/home/Faq';
import Features from '@/components/student/home/Features';
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
            <CallToAction />
            <Faq />
        </>
    );
};

export default Home;
