import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import './index.css'
import CourseDetails from './pages/course-details/CourseDetails'

function App() {

  const [ loading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    { loading ? (
      <div>
        <h1 className='text-6xl font-oswald flex justify-center items-center border-2 border-black h-[100vh]'>This is a pure work of fiction. Any resemblance to real-world characters is purely coincidental.</h1>
      </div>
    ): (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses/:courseName' element={<CourseDetails/>}/>
        </Routes>
      </BrowserRouter>
    )}
  </>
  
  )
  
}

export default App


