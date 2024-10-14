// ProfileHeader.js
import React from 'react';
import { FaCog } from 'react-icons/fa'; // Importing settings icon from react-icons
import profilePicture from '../../image/manprofile.png'; // Adjust the path as needed

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center relative"> {/* Add relative positioning */}
      {/* Profile Picture */}
      <img 
        src={user.profilePicture || profilePicture} // Use local image as default if user doesn't provide one
        alt="Profile" 
        className="w-24 h-24 rounded-full mb-2"
      />
      
      {/* User Name */}
      <h2 className="text-lg font-bold">{user.name}</h2>
      
      {/* Join Date */}
      <p className="text-gray-600 mb-2">Joined: {user.joinDate}</p>
      
      {/* Settings Icon */}
      <button 
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        title="Settings"
      >
        <FaCog size={20} />
      </button>
    </div>
  );
};

export default ProfileHeader;
