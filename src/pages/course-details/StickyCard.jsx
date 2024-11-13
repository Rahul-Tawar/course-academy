import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

const StickyCard = ({ videoURL, price, title, description }) => {
    const [showCard, setShowCard] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window width
    const [showButton, setShowButton] = useState(false); // New state for button visibility in mobile view

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowCard(scrollY > 600);

            // Show the button when scrolled between 100 and 1000 pixels in mobile view
            if (isMobile) {
                setShowButton(scrollY > 250 && scrollY < 2000);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <>
            {isMobile ? (
                // Only show the "Add to Cart" button in mobile view within the defined scroll range
                showButton && (
                    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[22vw] transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
                        <button className='w-full bg-[#f8b31d] p-2 rounded-lg border-2 border-black'>
                            <span className='font-oswald text-xl'>Add to Cart</span>
                        </button>
                    </div>
                )
            ) : (
                // Show the full sticky card in desktop view
                showCard && (
                    <div className='sticky top-10 w-[22vw] h-[65vh] border-2 border-black shadow-lg rounded-lg mt-10 ml-[25%] p-4 transition-all duration-300'>
                        <video controls width="100%" className='rounded-lg mb-4'>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                        <div className='flex items-center gap-2 mb-2'>
                            <Palette className='w-7 h-7 rotate-90' stroke='#f8b31d' />
                            <h2 className='text-2xl font-oswald'>{title}</h2>
                        </div>
                        <p className='text-gray-700 mb-4'>{description}</p>
                        <div className="mt-20">
                            <div className='flex gap-2 mt-10'>
                                <span className='text-xl font-oswald'>{price}</span>
                                <span className='text-gray-600'>(All you need to pay)</span>
                            </div>       
                        <button className='w-full bg-[#f8b31d] p-2 rounded-lg border-2 border-black mt-2'>
                            <span className='font-oswald text-xl'>Add to Cart</span>
                        </button>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default StickyCard;
