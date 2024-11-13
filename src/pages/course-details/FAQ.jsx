import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';



const CourseFAQ = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ml-8 mt-16 mb-20">
      <h2 className="font-bebasneue text-5xl border-t-2 border-[#f8b31d] pt-2 w-min">Frequently</h2>
      <h2 className='font-cursive text-6xl text-[#f8b31d]'>Asked</h2>
      <div className="mt-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseFAQ;

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className='mr-8'>
      <div className="border-b border-gray-500 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className='mr-4'>{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="mt-2 pr-12">
          <p className="text-gray-500">{answer}</p>
        </div>
      </div>
    </div>
    </div>
  );
};