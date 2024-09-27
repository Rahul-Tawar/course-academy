import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import './index.css'
import CourseDetails from './pages/course-details/CourseDetails'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses/:courseName' element={<CourseDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
