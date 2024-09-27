import React from 'react';
import {useNavigate} from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/about  ')
  }
  
  return (
    <div className='pb-10'>
      {/*who we are section */}
      <div className='flex flex-col font-bebasneue text-5xl mt-20 ml-8'>
        <h1 className='w-min border-t-2 border-[#f8b31d] -mt-2 pt-3'>WHO</h1>
        <h1>WE ARE ?</h1>
      </div>

      <div className='pt-4 text-2xl pl-8'>
        <h1 className='font-platypi font-bold'>We Teach</h1>
        <h1 className='font-cursive text-6xl text-[#f8b31d] font-bold pt-3'>Aspiring Artists</h1>
        <p className='pt-6 text-lg text-gray-600 pr-8'>At Reyansh Rahul Art Academy, our mission is to inspire creativity and nurture artistic talent. We offer a vibrant platform where aspiring artists can hone their skills and explore diverse art forms.
        </p>
        <p className=' text-lg text-gray-600 pr-8'>With expert mentorship and innovative programs, we empower artists at every level to reach their full potential and excel in the creative industry.
        </p>
      </div>

      {/* About us more button */}
      <div className='pt-6 '>
          <button 
            className="font-oswald bg-[#f8b31d] text-black ml-8 flex flex-row"
            onClick={handleClick}
          >
            MORE ABOUT US
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-6 h-6 fill-current text-gray-800"
          >
            <path
              d="M17.5 5.999l-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
        </svg>  
          </button>  
          
      </div>
        
    </div>
  );
};

export default About;
