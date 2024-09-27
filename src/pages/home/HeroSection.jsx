import React from 'react';
import Nav from '../../components/Nav';

const HeroSection = () => {

  return (
    <>
      <div className='h-screen bg-[#f8b31d]'>
        <Nav />
        <div className=''>
          <div className='flex flex-col text-6xl ml-8 font-bebasneue translate-y-40 md:text-9xl md:translate-y-4'>
            <div>
              <h1 className='text-white'>YOUR</h1>
              <h1 className=''>PASSION</h1>
              <h1 className=''>TO</h1>
              <h1 className='relative'>
                <span className='transition-all duration-200 ease-in-out'>PROFESSION</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;