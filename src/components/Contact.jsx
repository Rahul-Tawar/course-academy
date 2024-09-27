import React from 'react'

const Contact = () => {
  return (
    <div className='ml-8 pt-8 pb-8'>
      <div className=''>
          <div className='pt-2 flex flex-row gap-4'>
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
          <h1 className='font-oswald font-bold text-3xl'>Contact Us</h1>
          </div>
      </div>
      <div className='flex-col md:flex-row pl-20 md:gap-28'>
          <div className='pb-8'>
              <p className='text-gray-600 pt-6'>Want to reach out?</p>
              <p className='text-gray-600'> Our inbox is as open as a canvas,</p>
          </div>
          <div>
              <p className='font-cursive text-4xl pt-4 text-[#f8b31d] font-bold'>Paint us a message!</p>
          </div>
          <div className='flex flex-col text-gray-600'>
            <p>+91 6260174231</p>
            <p>arenaartacademy@gmail.com</p>
            <p>174, Kalindi Kunj Raigarh Chhattisgarh 496001</p>
          </div>
    </div>

      {/* Contact section */}
      </div>
  )
}

export default Contact
