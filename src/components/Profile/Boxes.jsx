import React from 'react';
import { FaBook, FaFire, FaGlobe } from 'react-icons/fa'; // Importing icons from React Icons

const ProfileInfoBox = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* Words Box */}
      <div className=" rounded-3xl p-4 shadow-lg text-center bg-lime-100 dark:bg-slate-600">
        <div className="flex justify-center mb-2">
          <FaBook className="text-3xl text-blue-500" /> {/* Icon for Words */}
        </div>
        <h2 className="md:text-3xl text-lg font-extrabold mb-1 dark:text-slate-200">Words</h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-white">150</p>
      </div>

      {/* Languages Box */}
      <div className=" rounded-3xl p-4 shadow-lg text-center bg-lime-100 dark:bg-slate-600">
        <div className="flex justify-center mb-2">
          <FaGlobe className="text-3xl text-green-500" /> {/* Icon for Languages */}
        </div>
        <h2 className="md:text-3xl text-lg font-extrabold mb-1 dark:text-slate-200">Languages</h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-white">English, Arabic</p>
      </div>

      {/* Streak Box */}
      <div className=" rounded-3xl p-4 shadow-lg text-center bg-lime-100 dark:bg-slate-600">
        <div className="flex justify-center mb-2">
          <FaFire className="text-3xl text-red-500" /> {/* Icon for Streak */}
        </div>
        <h2 className="md:text-3xl text-lg font-extrabold mb-1 dark:text-slate-200">Streak</h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-white">10</p>
      </div>
    </div>
  );
};

export default ProfileInfoBox;
