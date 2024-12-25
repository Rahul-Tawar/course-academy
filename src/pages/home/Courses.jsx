import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CoursesData = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Master full-stack web development in this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and kickstart your career in tech.",
    slug: "web-development-bootcamp",
    images: ["/courses-images/web-development.png"],
  },
  {
    id: 2,
    title: "UI/UX Design Mastery",
    description: "Learn the art of designing user-friendly and visually appealing interfaces. This course covers design principles, wireframing, prototyping, and using tools like Figma and Adobe XD.",
    slug: "ui-ux-design-mastery",
    images: ["/courses-images/ui-ux.png"],
  },
  {
    id: 3,
    title: "Data Science and Machine Learning",
    description: "Dive into the world of data science. Learn Python, statistics, data visualization, and machine learning algorithms through hands-on projects.",
    slug: "data-science-machine-learning",
    images: ["/courses-images/DS-ML.png"],
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    description: "Learn the fundamentals of digital marketing, including SEO, social media marketing, Google Ads, email marketing, and analytics. Build your strategy and boost online presence.",
    slug: "digital-marketing-essentials",
    images: ["/courses-images/DME.png"],
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
      <div className='flex justify-center items-center h-[370px] md:w-[100%] overflow:clip relative mt-10 w-[99vw]'>
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
        className='text-[15px] text-center font-calibri bg-[#f8b31d] w-full rounded-lg h-10 mt-8 border-2 border-black'
        onClick={navigateToDetails}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default Courses;
