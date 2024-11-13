import React from 'react'
import NewsLetter from './NewsLetter'

const Contact = () => {
  return (
    <div className='pt-8 mb-8'>
      <div>
        <div className='pt-2 flex flex-row gap-2 ml-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-10 h-10 fill-current text-[#f8b31d]"
          >
            <path
              d="M17.5 5.999l-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
          <h1 className='font-bebasneue text-5xl'>Contact Us</h1>
        </div>
      </div>
      
      
        {/* Left Section */}
        <div className='flex flex-col ml-8 md:flex-row md:gap-8 md:justify-between pr-8'>
          <div className=''>
            <p className='text-gray-600 pt-6'>Want to reach out?</p>
            <p className='text-gray-600'> Our inbox is as open as a canvas,</p>
          </div>
          <div>
            <p className='font-cursive text-5xl pt-4 text-[#f8b31d] font-bold'>Paint us a message!</p>
          </div>
          <div className='flex flex-col text-gray-600 pt-4'>
            <p>+91 6260174231</p>
            <p>arenaartacademy@gmail.com</p>
            <p>174, Kalindi Kunj Raigarh Chhattisgarh 496001</p>
          </div>
        </div>

    </div>
  )
}

export default Contact
