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
    <div className="w-full max-w-5xl mx-auto relative pb-8">
      <div className="text-2xl ml-8 pb-8 font-bold">
        <h1 className="inline font-cursive text-4xl">A</h1>
        <span className="text-[#f8b31d] font-bold text-5xl font-cursive pl-3">Showcase</span>
        <h1 className="font-cursive text-4xl">of mentor excellence</h1>
      </div>
      <div className="overflow-x-hidden">
        <div className="ml-8 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover h-60 w-40"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mentor icons */}
      
      <div className="text-2xl ml-8 mt-20">
        <h1 className="font-bebasneue text-4xl w-min border-t-2 border-[#f8b31d] pt-2">Moments</h1>
        <span className="text-4xl font-bebasneue">With</span>
        <h1 className="font-cursive text-5xl text-[#f8b31d] font-bold">Icons </h1>
      </div>
      <div className="overflow-x-hidden pt-8">
        <div className="ml-8 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4">
            {moments.map((moment, index) => (
              <div key={index} className="relative flex-shrink-0 snap-center">
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="w-full object-cover h-80 w-20"
                />
                <div className={`absolute bottom-0 left-0 w-full font-oswald font-bold translate-y-[-40px] text-[#f8b31d] text-center`}>
                  {moment.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}
