import React from 'react';

const CourseDescription = ({ course }) => {
  const [firstWord, ...restOfWords] = course.title.split(' ');
  return (
    <div className='ml-8 md:mt-10'>
      <div className='text-5xl font-bebasneue pr-4'>
        <h1 className='w-min border-t-2 border-[#f8b31d] pt-2'>{firstWord}</h1>
        <h1>{restOfWords.join(' ') }</h1>
      </div>
      <p className="mr-8 text-gray-600 mt-2">{course.Description}</p> 
    </div>
  );
};

export default CourseDescription;