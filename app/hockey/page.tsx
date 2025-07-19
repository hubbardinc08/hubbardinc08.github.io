import React from 'react'
//import Link from 'next/link'
import Image from 'next/image';
import Experience from './components/Experience'
import Highlights from './components/Highlights';

export default function HockeyPage() {
  return (
    <div className="mt-20 relative">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-center tracking-wide">HOCKEY</h1>
      <p className="text-center mt-4">
        ---  <a
          href="https://www.youtube.com/@howardqian11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >Check out my channel</a>  ---
      </p>
      <p className="text-center mt-4">
        ---  <a
          href="https://www.eliteprospects.com/player/888354/howard-qian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >Check out my Elite Prospects</a>  ---
      </p>

      <div>
        <Experience />
      </div>

      <div className="flex w-full justify-center items-center gap-8 mt-8">
        <div className="flex flex-col items-center mt-8 gap-8">
          <Image
            src="/images/skating_pic.png"
            alt="Skating"
            className="rounded-xl fade-edge"
            width={400}
            height={600}
          />
          <Image
            src="/images/shooting_pose.jpeg"
            alt="Shooting pose"
            className="rounded-xl fade-edge"
            width={400}
            height={600}
          />
        </div>
        <div className="relative flex justify-start mt-8">
          <Image
            src="/images/jersey_pic.jpeg" // <-- update path as needed
            alt="Jersey"
            className="object-contain fade-edge"
            width={400}
            height={600}
          />
        </div>
      </div>

      <div className="mt-15">
        <Highlights />
      </div>

    </div>
  );
}

