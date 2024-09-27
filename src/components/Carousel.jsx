import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full mt-8 items-center md:w-1/4 mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Slide ${index}`} className=" md:w-50px md:h-50px" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
