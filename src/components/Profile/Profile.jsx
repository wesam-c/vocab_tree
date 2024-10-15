import React from 'react';
import { FaCog } from 'react-icons/fa'; // Importing settings icon from react-icons
import profilePicture from '../../image/manprofile1.png'; // Default profile picture
import coverPicture from '../../image/cover.png'; // Default cover picture

const ProfileHeader = ({ user }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg">
      {/* Cover Photo */}
      <div className="h-44 w-full rounded-t-lg overflow-hidden">
        <img 
          src={user.coverPhoto || coverPicture} 
          alt="Cover" 
          className="h-full w-full object-cover rounded-t-lg" 
        />
      </div>

      {/* Settings Icon */}
      <button 
        className="absolute top-4 right-4 text-gray-300 hover:text-gray-500"
        title="Settings"
      >
        <FaCog size={20} />
      </button>

      {/* Profile Picture */}
      <div className="relative flex justify-start ml-6"> {/* Move profile picture to the left */}
        <div className="absolute -bottom-12">
          <img 
            src={user.profilePicture || profilePicture} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white" // Border added to highlight the profile picture
          />
        </div>
      </div>

      {/* User Information and Words Count Row */}
      <div className="flex items-center justify-between mt-16 px-6"> {/* Flex container to align items horizontally */}
        {/* User Information (Left Aligned) */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <div className="flex items-center mt-2">
            {/* Current Languages with Flags */}
            <div className="languages flex space-x-2">
              {user.languages && user.languages.length > 0 ? (
                user.languages.map((lang, index) => (
                  <span key={index} title={lang.name}>
                    <img src={lang.flagUrl} alt={lang.name} className="w-5 h-5" />
                  </span>
                ))
              ) : (
                <p>No languages available</p>
              )}
            </div>
            <span className="mx-2">•</span>
            <p className="text-gray-600">Joined: {user.joinDate}</p>
          </div>
        </div>

        {/* Words Count (Right Aligned) */}
        <div className="flex-shrink-0 flex items-center">
          <div className="bg-slate-200 text-white font-semibold py-1 px-4 rounded-md flex flex-col items-center">
            <span className="text-2xl text-black">{user.wordsCount} 400</span> {/* Main count size */}
            <span className="text-sm text-slate-700">Words Learned</span> {/* Smaller font for description */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
