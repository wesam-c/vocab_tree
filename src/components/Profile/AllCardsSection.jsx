import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SeeAllCardsCard = () => {
    return (
        <div className="w-full p-6">
            <a 
                href="/cards" // Change this to your target route
                className="rounded-3xl p-4 shadow-lg text-center no-underline bg-lime-100 dark:bg-slate-600 flex justify-between items-center cursor-pointer hover:bg-lime-200 dark:hover:bg-slate-700 transition-all"
            >
                <h2 className="md:text-3xl text-lg font-extrabold mb-1 dark:text-slate-200">See all your cards</h2>
                <FaArrowRight className="text-3xl text-gray-600 dark:text-white" /> {/* Arrow Icon */}
            </a>
        </div>
    );
};

export default SeeAllCardsCard;
