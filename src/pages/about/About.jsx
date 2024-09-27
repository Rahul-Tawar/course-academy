import React from 'react'

import Team from './Team'
import Gallery from './Gallery'
import MeetYourMentor from './MeetYourMentor'
import Nav from '../../components/Nav'


const About = () => {
  return (
    <>
         <Nav />
         <MeetYourMentor />
         <Gallery />  
         <Team />
    </>
  )
}

export default About
