import React from 'react';
import Nav from '../../components/Nav';
import {ReactTyped as Typed} from 'react-typed';

const HeroSection = () => {
  return (
    <>
      <div className='h-screen bg-[#f8b31d]'>
        <Nav />
        <div className='flex flex-col text-7xl translate-y-[100px] md:translate-y-0 ml-8 font-bebasneue md:text-9xl mt-10 '>
          <h1 className='text-white'>YOUR</h1>
          <h1>PASSION</h1>
          <h1>TO</h1>
          <h1 className='relative'>
            <Typed
              className='text-white' // Ensure text color matches the h1
              strings={[
                'Profession',
                'Commission',
                'Satisfaction',
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
