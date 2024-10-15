// ProfilePage.js
import React from 'react';
import ProfileHeader from '../components/Profile/Profile';

const ProfilePage = () => {
  const user = {
    name: 'Language man',
    joinDate: 'October 1, 2024', // Format the join date as needed
     // Optional: Provide a URL or leave empty to use the default image
  };

  return (
    <div className="bg-lime-200 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto pt-24 ">
        
        <ProfileHeader user={user} />
        {/* Additional profile sections can be added below */}
      </div>
    </div>
  );
};

export default ProfilePage;
