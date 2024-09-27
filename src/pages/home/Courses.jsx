import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CoursesData = [
  {
    id: 1,
    title: "Commission Work Masterclass",
    description: "Master Commission Art: Monetize Skills Online & Offline Quickly",
    slug: "commission-work-masterclass",
    images: ["/courses-images/Commision-art-work.png"],
  },
  {
    id: 2,
    title: "Drawing Mastery Training",
    description: "Master Drawing Skills: Become a Professional Artist",
    slug: "drawing-mastery-training",
    images: ["/courses-images/Drawing-Mastery.png"],
  },
  {
    id: 3,
    title: "The Transparency Training",
    description: "Master Watercolor Painting: Advanced Training for Skilled Artists.",
    slug: "the-transparency-training",
    images: ["/courses-images/Transparency-training.png"],
  },
  {
    id: 4,
    title: "The Branded Art Teachers",
    description: "The Roadmap From ARTIST TO ARTPRENEUR",
    slug: "the-branded-artist",
    images: ["/courses-images/the-branded-artist.png"],
  },
];

const Courses = () => {
  const [active, setActive] = useState(0); // Default active card (3rd item)
  const isNotDesktop = window.innerWidth < 1024;
  const loadShow = () => {
    const items = document.querySelectorAll(".items");
    
    let stt = 0;

    // Center active card
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Right side cards
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${isNotDesktop? 80: 180*stt}px) scale(${isNotDesktop? 0.9: 1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    
    }

    // Left side cards
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${isNotDesktop ? -80 : -180 * stt}px) scale(${isNotDesktop? 0.9: 1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  useEffect(() => {
    console.log(window.innerWidth); 
    loadShow();
  }, [active]);

  const handleNext = () => {
    if (active + 1 < CoursesData.length) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active - 1 >= 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="flex flex-col relative">
      <div className="ml-8">
        <div>
          <h2 className="text-5xl font-bebasneue text-black w-min border-t-2 border-[#f8b31d] pt-3">
            OUR
          </h2>
          <h2 className="text-5xl font-bebasneue text-black">Courses</h2>
        </div>
        <p className='pr-8 text-lg text-gray-600 pt-8'>
          Explore our diverse art courses, including painting, drawing, and digital design. Perfect for beginners and advanced artists. Enroll today!
        </p>
      </div>
      {/* Slider section start */}
      <div className=''>
      <div className='flex justify-center items-center h-[370px] md:w-[100%] overflow:clip relative mt-10 w-[80vw]'>
            <ChevronLeft onClick={handlePrev} className='absolute left-[50px] top-[40%] z-10 text-[#f8b31d] w-12 h-12 hover:scale-125'/>
            <div className='flex justify-center items-center mt-8 w-full h-[500px]'>
              {CoursesData.map((course) => (
                <CourseCard key={course.id} course={course} className='items' />
              ))}
            </div>
            <ChevronRight onClick={handleNext} className='absolute right-[50px] top-[40%] text-[#f8b31d] z-10 w-12 h-12 hover:scale-125'/>
          </div>
      </div>

    </div>
  );
};

function CourseCard({ course, className }) {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/courses/${course.slug}`);
  };

  return (
    <div className={`md:w-[300px] w-[60vw] h-auto bg-white flex flex-col p-[20px] overflow-hidden border-2 rounded-md border-black transition-all duration-500 ${className} absolute `}>
      <img
        src={course.images[0]}
        alt={course.title}
        className='w-[260px] h-[140px] md:[170px] object-fit'
      />
      <h1 className='md:text-[25px] text-[16px] text-center font-Calibri font-bold pt-4'>{course.title}</h1>
      <p className='md:text-[15px] text-[13px] text-center font-calibri'>{course.description}</p>
      <button
        className='text-[15px] text-center font-calibri bg-[#f8b31d] w-full rounded-lg h-10 mt-8'
        onClick={navigateToDetails}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default Courses;
