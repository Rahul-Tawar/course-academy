import React from 'react'

import Team from './Team'
import Gallery from './Gallery'
import MeetYourMentor from './MeetYourMentor'
import Nav from '../../components/Nav'
import NewsLetter from '../../components/NewsLetter'
import Contact from '../../components/Contact'

const About = () => {
  return (
    <>
         <Nav />
         <MeetYourMentor />
         <Gallery />  
         <Team />
         <NewsLetter />
         <Contact />
    </>
  )
}

export default About
