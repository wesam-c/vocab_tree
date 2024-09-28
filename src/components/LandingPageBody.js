import React from 'react';

const LandingPageBody = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-0 '>
      <h1 className="text-4xl text-center font-bold text-yellow-950 signika-negative-unique mt-5 mb-5">Grow Your Vocabulary, One Word at a Time.</h1>
      <p className='text-lg text-yellow-700 md:text-xl mb-8 text-center max-w-lg'>Learn and grow your vocabulary effortlessly using flashcards</p>
      <a href="/start" className="bg-lime-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl shadow-lg hover:bg-lime-600 transition duration-300 mb-8">Start Learning</a>
    </div>
  );
};

export default LandingPageBody;
