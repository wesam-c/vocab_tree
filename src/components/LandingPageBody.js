import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const LandingPageBody = () => {


  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 md:px-0'>

      <h1 className="text-5xl relative z-10 text-center font-bold text-yellow-950 dark:text-yellow-400 signika-negative-unique mt-28 mb-5">
        Grow Your Vocabulary, One Word at a Time.
      </h1>

      <p className='text-lg relative z-10 text-yellow-700 dark:text-yellow-200 md:text-2xl mb-8 text-center max-w-lg'>
        Learn and grow your vocabulary effortlessly using flashcards
      </p>

      <a href="/signin" className="relative z-10 bg-lime-600 dark:bg-yellow-500  text-white  no-underline px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-bold shadow-lg hover:bg-lime-600 transition duration-300 mb-8 mt-6 flex gap-2 items-center group">
        Start Learning
        <IoIosArrowRoundForward className='text-2xl group-hover:translate-x-2 group-hover:rotate-45 duration-300'/>
      </a>
    </div>
  );
};

export default LandingPageBody;
