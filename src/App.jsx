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
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    { loading ? (
      <div>
        Loading...
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


