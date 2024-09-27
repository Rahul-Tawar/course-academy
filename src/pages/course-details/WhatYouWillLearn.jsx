import React from 'react';
import { Check } from 'lucide-react';

const WhatYouWillLearn = ({ items }) => {
  return (
    <div className="ml-8 mt-16">
      <h3 className="font-bebasneue text-5xl w-min border-t-2 border-[#f8b31d] pt-2">What</h3>
      <h3 className='font-cursive text-6xl text-[#f8b31d] font-bold'>You will learn!</h3>
      <ul className='mt-8 text-gray-600 list-none mr-8'>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className='text-gray-600 h-6 w-6 mr-4' />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
