import React from 'react';

const Highlights = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center tracking-wide">Highlights</h2>
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_Z8tvScdOFY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Highlights;