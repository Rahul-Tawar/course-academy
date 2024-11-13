import React from "react";

export default function Gallery() {
  const images = [
    { src: '/output/DM-1.png', alt: 'Slide 1' },
    { src: '/output/SANTO-1.png', alt: 'Slide 2' },
    { src: '/output/TT-GIRL-1.png', alt: 'Slide 3' },
    { src: '/output/TT-REMBRANT-1.png', alt: 'Slide 4' },
  ];

  const moments = [
    {
      src: '/moments-icons/ram-v-sutar.jpg',
      alt: 'Slide 1',
      description: 'Artist Ram V Sutar',
    },
    {
      src: '/moments-icons/cm.jpg',
      alt: 'Slide 1',
      description: 'Ex-CM, Bhupesh Baghel',
    },
    {
      src: '/moments-icons/bijay-biswaal.jpg',
      alt: 'Slide 1',
      description: 'Artist Bijay Biswaal',
    },
    {
      src: '/moments-icons/art-exhibition.jpg',
      alt: 'Slide 1',
      description: 'National Art Exhibition',
    },
    {
      src: '/moments-icons/group-photo-1.jpg',
      alt: 'Slide 1',
      description: 'National Art Exhibition​',
    },
  ];

  return (
    <div className="w-full relative pb-12 px-4 md:px-12">
      {/* Header Section */}
      <div className="text-2xl pb-8 font-bold">
        <h1 className="inline font-cursive text-4xl">A</h1>
        <span className="text-[#f8b31d] font-bold text-5xl font-cursive pl-3">Showcase</span>
        <h1 className="font-cursive text-4xl">of Mentor Excellence</h1>
      </div>

      {/* Image Gallery Section */}
      <div className="overflow-x-hidden">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4 pb-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover h-60 w-40 md:h-80 md:w-64"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Moments with Icons Section */}
      <div className="text-2xl mt-20">
        <h1 className="font-bebasneue text-4xl w-min md:mx-0 border-t-2 border-[#f8b31d] pt-2">Moments</h1>
        <span className="text-4xl font-bebasneue">With</span>
        <h1 className="font-cursive text-5xl text-[#f8b31d] font-bold">Icons</h1>
      </div>

      {/* Moments Slider Section for Mobile */}
      <div className="mt-12 block md:hidden">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4 pb-4">
            {moments.map((moment, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center overflow-hidden hover:scale-125 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="w-[270px] h-[300px] object-cover border-b border-[#f8b31d] pb-4"
                />
                <div className="bg-white py-2">
                  <h2 className="font-oswald text-xl">{moment.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Moments Grid Section for Desktop */}
      <div className="mt-12 hidden md:block">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {moments.map((moment, index) => (
            <div key={index} className="relative">
             <div className="">
             <img
                src={moment.src}
                alt={moment.alt}
                className="w-full object-cover h-[300px] w-[250px] border-b border-[#f8b31d] pb-4"
              />
              <div className="py-2">
                <h2 className="font-oswald text-xl">{moment.description}</h2>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
