import AboutBanner from '@/components/student/about/AboutBanner'
import AboutInstitute from '@/components/student/about/AboutInstitute'
import MissionVision from '@/components/student/about/MissionVision'
import OurJourney from '@/components/student/about/OurJourney'
import Statistics from '@/components/student/about/Statistics'
import Trainers from '@/components/student/about/Trainers'
import React from 'react'

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutInstitute />
            <MissionVision />
            <OurJourney />
            <Statistics />
            <Trainers />
        </>
    )
}

export default About
