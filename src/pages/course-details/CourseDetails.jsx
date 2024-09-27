import React from 'react'
import { useParams } from 'react-router-dom'
import CourseData from '../../data/CourseData'

import CourseDescription from './CourseDescription'
import Nav from '../../components/Nav'
import FAQ from './FAQ'
import Purchase from './Purchase'
import Video from './Video'
import WhatYouWillLearn from './WhatYouWillLearn'
import TestimonialsCardList from './TestimonialsCardList'



const CourseDetails = () => {
  const { courseName } = useParams()
  const course = CourseData.find(c => c.slug === courseName)
  

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <Nav />
      <div className='md:grid md:grid-cols-2'>
        <div>
        <CourseDescription course={course} />
        <WhatYouWillLearn items={course.WhatYouWillLearn} />
        <FAQ faqs={course.FAQs} />
        <TestimonialsCardList Testimonials={course.Testimonials} />
        </div>
        <div>
          <Video videoURL={course.videoURL} />
          <Purchase price={course.price} /> 
        </div>
        
      </div>
    </>
       
  )
}

export default CourseDetails