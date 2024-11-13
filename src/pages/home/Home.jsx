import React from 'react'

import HeroSection from './HeroSection'
import About from './About'
import Testimonials from './Testimonials'
import Courses from './Courses'
import Contact from '../../components/Contact'
import NewsLetter from '../../components/NewsLetter'


const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Courses />
      <Testimonials />
      <NewsLetter />
      <Contact />
    </>
  )
}

export default Home
