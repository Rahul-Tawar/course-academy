import React from 'react'

const MeetYourMentor = () => {
  return (
    <div className='pb-8'>
      <div className='text-4xl ml-8 translate-y-[-20px] mt-10'>
        <h1 className='font-bebasneue text-5xl w-min border-t-2 border-[#f8b31d] pt-2'>YOUR</h1>
        <h1 className='font-cursive text-[#f8b31d] text-5xl font-bold'>Mentor</h1>
      </div>
      <div className="flex justify-center items-center">
          <img src="./role-images/mentor.jpg" alt="hero-image" className='rounded-full w-[300px] h-[300px]' />
      </div>

      {/* mentor paragraph */}
      <div className='ml-8 text-gray-600 pt-8 pr-8'>
        <p>
        Reyanshh Rahul is a professional artist from Chhattisgarh, India, and the founder of Arena Art Academy in Raigarh. With over six years of experience in art education, he has completed more than 200 international private art commissions. Recognized for his talent by Ram V. Sutar, the creator of the Statue of Unity, Reyanshh’s notable works include a commissioned portrait of Prime Minister Narendra Modi. He regularly participates in art exhibitions and conducts live painting demonstrations to inspire and engage fellow artists.
        </p>
      </div>
    </div>
  )
}

export default MeetYourMentor
