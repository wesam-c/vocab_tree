import React from 'react';
import { FaCog } from 'react-icons/fa'; // Importing settings icon from react-icons
import profilePicture from '../../image/womanprofile.jpg'; // Default profile picture
import coverPicture from '../../image/cover.png'; // Default cover picture
import { useTheme } from '../../context/ThemeContext'; // Importing theme context

const ProfileHeader = ({ user }) => {
  const { isDarkMode, toggleTheme } = useTheme(); // Using theme context

  return (
    <div className={`relative shadow-md rounded-3xl ${isDarkMode ? 'bg-gray-600 text-slate-100' : 'bg-white text-gray-600'}`}>
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
        onClick={toggleTheme} // Example: Toggles the theme when clicked
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
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <div className="flex items-center mt-2">
            <p className="text-gray-600 dark:text-slate-400">Joined: {user.joinDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
