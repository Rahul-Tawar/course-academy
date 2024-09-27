import React from 'react';

const Video = ({ videoURL }) => {
  return (
    <div className="ml-8 mt-8 grid justify-items-start border-2 border-black md:h-[300px] md:w-[600px] h-[100px] w-auto mr-8">
      <h3 className="font-bebasneue font-bold text-3xl mb-4">Course Video</h3>
      {videoURL ? (
        <video controls width="100%" poster='https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/66b25ca063efd7de0dcdaa32_651bc96cdf6e16f2d4f9f36f_TlUmfJGCRAaiepkuTeGM.png'>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        
        </video>
      ) : (
        <p>No video available for this course.</p>
      )}
    </div>
  );
};

export default Video;