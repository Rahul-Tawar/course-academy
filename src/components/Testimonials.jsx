import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';


const TestimonialCard = ({ name, testimonial }) => {
  
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

 

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setIsDisliked(false);
  };

  const handleDislikeClick = () => {
    setIsDisliked((prev) => !prev);
    setIsLiked(false);
  };

  const initials = () => {
    const [firstName = '', lastName = ''] = name?.split(' ') || [];
    return `${firstName[0]}${lastName[0]}`;
  }
  
  

  return (
    <div className="bg-white overflow-hidden border-b border-gray-600 mr-4">
      <div className="py-4 mt-2">
        <div className="flex items-center gap-2">
        <div className="flex flex-row gap-1 border w-12 h-12 rounded-full border-black items-center justify-center text-xl">
          <h1 className="font-bebasneue">{initials(name)}</h1>
        </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 px-2">{name}</h3>
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-base">
          {testimonial}
        </p>
      </div> 
      {/* Helpful section */}
      <div className="bottom-0 left-0 flex items-center gap-2 p-2 mb-2">
        <span className="text-sm">Helpful</span>
        <ThumbsUp
          className={`w-4 h-4 cursor-pointer transition-all ${
            isLiked ? 'text-[#f8b31d] fill-current' : 'text-gray-500'
          }`}
          onClick={handleLikeClick}
        />
        <ThumbsDown
          className={`w-4 h-4 cursor-pointer transition-all ${
            isDisliked ? 'text-gray-500 fill-current' : 'text-gray-500'
          }`}
          onClick={handleDislikeClick}
        />
      </div>
    </div>
  );
};

export default TestimonialCard ;