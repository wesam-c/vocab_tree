import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import TreeBranch from '../image/TreeBranch.png';

const LandingPageBody = () => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotate(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 md:px-0'>
      {/* Left Tree Branch Image (Mirrored) */}
      <img 
        src={TreeBranch}
        alt="Tree Branch Left" 
        className={`absolute z-0 md:mt-56 mt-96 top-0 md:left-44 left-28 transform -translate-x-1/2 w-[300px] md:w-[500px] opacity-70 transition-transform duration-500 ${rotate ? 'rotate-3' : ''} scale-x-[-1]`} 
      />

      {/* Right Tree Branch Image */}
      <img 
        src={TreeBranch}
        alt="Tree Branch Right" 
        className={`absolute z-0 md:mt-56 mt-96 top-0 md:right-44 right-28 transform translate-x-1/2 w-[300px] md:w-[500px] opacity-70 transition-transform duration-500 ${rotate ? 'rotate-3' : ''}`} 
      />

      <h1 className="text-4xl relative z-10 text-center font-bold text-yellow-950 signika-negative-unique mt-5 mb-5">
        Grow Your Vocabulary, One Word at a Time.
      </h1>

      <p className='text-lg relative z-10 text-yellow-700 md:text-xl mb-8 text-center max-w-lg'>
        Learn and grow your vocabulary effortlessly using flashcards
      </p>

      <a href="/start" className="relative z-10 bg-lime-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl shadow-lg hover:bg-lime-600 transition duration-300 mb-8 flex gap-2 items-center group">
        Start Learning
        <IoIosArrowRoundForward className='text-2xl group-hover:translate-x-2 group-hover:rotate-45 duration-300'/>
      </a>
    </div>
  );
};

export default LandingPageBody;
