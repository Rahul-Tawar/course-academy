import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseData from '../../data/CourseData';

import CourseDescription from './CourseDescription';
import Nav from '../../components/Nav';
import FAQ from './FAQ';
import Purchase from './Purchase';
import Video from './Video';
import WhatYouWillLearn from './WhatYouWillLearn';
import TestimonialsCardList from './TestimonialsCardList';
import Contact from '../../components/Contact';
import StickyCard from './StickyCard';
import NewsLetter from '../../components/NewsLetter';
import Login from '../../components/Login';

const CourseDetails = () => {
    const { courseName } = useParams();
    const course = CourseData.find(c => c.slug === courseName);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window width

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <>
            <Nav />
            <div className={`md:grid md:grid-cols-2 ${isMobile ? 'flex flex-col' : ''}`}>
                {isMobile && (
                    <>
                        <Video videoURL={course.videoURL} />
                        <StickyCard/>
                    </>
                )}
                <div className={`${isMobile ? 'mt-4' : ''}`}>
                    <CourseDescription course={course} />
                    <WhatYouWillLearn items={course.WhatYouWillLearn} />
                    <FAQ faqs={course.FAQs} />
                    <TestimonialsCardList Testimonials={course.Testimonials} />
                </div>
                {!isMobile && (
                    <div>
                        <Video videoURL={course.videoURL} />
                        <Purchase price={course.price} />
                        <StickyCard videoURL={course.videoURL} price={course.price} title={course.title} description={course.desc_small} />
                    </div>
                )}
            </div>
            <NewsLetter />
            <Contact />
        </>
    );
};

export default CourseDetails;
