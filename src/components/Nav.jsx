import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Disable scrolling when sidebar is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    // Cleanup function to re-enable scrolling when sidebar is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="Logo.png" alt="Logo" className="h-15 w-16 mr-2" />
              
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-7 flex-grow -translate-x-8 justify-center">
            <a href="#" className="py-4 px-2 font-semibold hover:text-gray-700 transition duration-300">Home</a>
            <a href="#" className="py-4 px-2 font-semibold hover:text-gray-700 transition duration-300">Courses</a>
            <a href="#" className="py-4 px-2 font-semibold hover:text-gray-700 transition duration-300">About</a>
            <a href="#" className="py-4 px-2 font-semibold hover:text-gray-700 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
          <button
              onClick={toggleMenu}
              className={` top-4 right-2 outline-none transition-transform duration-300 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
                <svg height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 296.999 296.999" xml:space="preserve">
                  <g id="XMLID_45_">
                      <g>
                          <path style={{fill: '#FFA800'}} d="M278.017,10.729c0.59,0.59,1.39,1.8,0.2,3.32l-36.88,46.71l-13.23-13.43l46.6-36.79
                              c0.57-0.45,1.1-0.62,1.57-0.62C277.047,9.919,277.657,10.369,278.017,10.729z"/>
                          <path style={{fill: '#FFA800'}} d="M103.827,145.999l38.62,39.19c-4.55,3.92-10.3,6.29-16.38,6.64c-7.86,0.47-15.55-2.46-21.11-8.03
                              c-5.57-5.56-8.5-13.26-8.04-21.11C97.287,156.469,99.757,150.599,103.827,145.999z"/>
                          <path style={{fill: '#D5C295'}} d="M85.017,203.739c6.06,6.05,9.37,14.11,9.32,22.67c-0.04,8.39-3.34,16.21-9.28,22.02
                              c-10.89,10.66-20.98,13.94-30.74,17.12c-10.71,3.48-21.77,7.08-32.43,19.75c-1.45-3.23-3.33-9.85-3.69-20.14
                              c-0.39-11.39,0.97-40.16,22.1-61.43c0,0,0,0,0-0.01c5.92-5.96,13.82-9.25,22.25-9.27c0.02,0,0.04,0,0.06,0
                              C71.067,194.449,79.027,197.749,85.017,203.739z"/>
                          <polygon style={{fill: '#8E725E'}} points="220.787,53.109 235.547,68.089 148.997,177.719 111.337,139.519 		"/>
                          <path style={{fill: '#BDC3C7'}} d="M109.677,198.729l-9.5,9.5c-2.02-4.21-4.76-8.09-8.16-11.49c-3.4-3.4-7.29-6.14-11.5-8.15l9.5-9.51
                              c1.86,4.33,4.53,8.32,7.93,11.72C101.347,194.209,105.347,196.869,109.677,198.729z"/>
                          <path d="M285.017,3.729c4.59,4.59,4.99,11.36,0.97,16.45l-132.11,167.35c-6.63,8.39-16.55,13.56-27.23,14.19
                              c-0.73,0.04-1.46,0.06-2.19,0.06c-1.22,0-2.44-0.06-3.65-0.18l-17.23,17.23c0.45,2.49,0.68,5.04,0.66,7.63
                              c-0.06,11.05-4.41,21.37-12.26,29.05c-12.54,12.27-24.25,16.09-34.59,19.45c-10.85,3.53-20.22,6.58-29.61,18.83
                              c-1.6,2.08-3.74,3.21-6.01,3.21c-0.4,0-0.8-0.03-1.2-0.11c-3.95-0.68-6.95-4.43-9.18-11.45c-2.69-8.44-4.55-23.54-1.74-40.59
                              c1.1-6.65,3.11-14.76,6.8-23.17c3.69-8.4,9.04-17.1,16.82-24.93c7.79-7.85,18.18-12.18,29.26-12.2c0.03,0,0.06,0,0.08,0
                              c2.47,0,4.91,0.23,7.3,0.65l17.25-17.25c-0.19-1.93-0.24-3.88-0.12-5.84c0.63-10.68,5.8-20.6,14.19-27.23l167.34-132.11
                              C273.667-1.251,280.427-0.861,285.017,3.729z M278.217,14.049c1.19-1.52,0.39-2.73-0.2-3.32c-0.36-0.36-0.97-0.81-1.74-0.81
                              c-0.47,0-1,0.17-1.57,0.62l-46.6,36.79l13.23,13.43L278.217,14.049z M235.547,68.089l-14.76-14.98l-109.45,86.41l37.66,38.2
                              L235.547,68.089z M142.447,185.189l-38.62-39.19c-4.07,4.6-6.54,10.47-6.91,16.69c-0.46,7.85,2.47,15.55,8.04,21.11
                              c5.56,5.57,13.25,8.5,21.11,8.03C132.147,191.479,137.897,189.109,142.447,185.189z M100.177,208.229l9.5-9.5
                              c-4.33-1.86-8.33-4.52-11.73-7.93c-3.4-3.4-6.07-7.39-7.93-11.72l-9.5,9.51c4.21,2.01,8.1,4.75,11.5,8.15
                              C95.417,200.139,98.157,204.019,100.177,208.229z M94.337,226.409c0.05-8.56-3.26-16.62-9.32-22.67
                              c-5.99-5.99-13.95-9.29-22.41-9.29c-0.02,0-0.04,0-0.06,0c-8.43,0.02-16.33,3.31-22.25,9.27c0,0.01,0,0.01,0,0.01
                              c-21.13,21.27-22.49,50.04-22.1,61.43c0.36,10.29,2.24,16.91,3.69,20.14c10.66-12.67,21.72-16.27,32.43-19.75
                              c9.76-3.18,19.85-6.46,30.74-17.12C90.997,242.619,94.297,234.799,94.337,226.409z"/>
                      </g>
                  </g>
               </svg>

            </button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden mobile-menu z-50`}>
          <div className='flex translate-y-40 ml-8'>
            <div className="flex flex-col font-oswald font-bold gap-8 text-2xl translate-y-16">
              <ul >
                <a href="#" >Home</a>
              </ul>
             <ul>
                <a href="#">Courses</a>
             </ul>
              <ul>
                <a href="">About Us</a>
              </ul>
              <ul>
                <a href="#">Contact</a>
              </ul>
            </div>
            <div className='flex flex-row gap-4 translate-y-[65vh] translate-x-[-13vh]'>
              <a href="https://www.instagram.com/reyanshh_rahul/" target='_blank'><img src="/icons/instagram.png" alt="" className='h-7 w-7'/></a>
              <a href="https://www.youtube.com/channel/UC7YPCJZWCGuvcmBakFlOkbg" target='_blank'><img src="/icons/youtube.png" alt="" className='h-7 w-7'/></a>
              <a href="https://www.facebook.com/ArtistReyanshhRahul/" target='_blank'><img src="/icons/facebook.png" alt="" className='h-7 w-8' /></a>
            </div>

          </div>
      </div>

    </nav>
  );
};

export default Nav;
