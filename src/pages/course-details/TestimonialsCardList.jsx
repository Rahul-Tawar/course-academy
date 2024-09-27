import React from 'react'
import TestimonialCard from '../../components/Testimonials'

const TestimonialsCardList = ({Testimonials}) => {
  return (
    <div className='ml-8'>
        <h1 className='font-bebasneue text-5xl w-min border-t-2 border-[#f8b31d] pt-2'>What</h1>
        <h1 className='font-cursive text-5xl font-bold text-[#f8b31d]'>Students Say</h1>
        <p className='text-gray-600'>We didn't force them, swear!</p>
        {/* Testimonials card list */}
        {Object.entries(Testimonials).map(([name, testimonial], index) => (
            <div className=' grid grid-rows-3 grid-flow-col gap-2'>
            {Object.entries(Testimonials).map(([name, testimonial], index) => (
                <TestimonialCard key={index} name={name} testimonial={testimonial} />
            ))}
        </div>
        ))}
    </div>
  )
}

export default TestimonialsCardList
