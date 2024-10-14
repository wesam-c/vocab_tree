// ProfilePage.js
import React from 'react';
import ProfileHeader from '../components/Profile/Profile';

const ProfilePage = () => {
  const user = {
    name: 'wesam',
    joinDate: 'October 1, 2024', // Format the join date as needed
    profilePicture: '', // Optional: Provide a URL or leave empty to use the default image
  };

  return (
    <div className="bg-lime-200 min-h-screen"> {/* Add the background color and minimum height */}
      <div className="container mx-auto mt-36">
        
        <ProfileHeader user={user} />
        {/* Additional profile sections can be added below */}
      </div>
    </div>
  );
};

export default ProfilePage;
