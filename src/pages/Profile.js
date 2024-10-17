// ProfilePage.js
import React from 'react';
import ProfileHeader from '../components/Profile/Profile';
import ProfileInfoBox from '../components/Profile/Boxes';
import SeeAllCardsCard from '../components/Profile/AllCardsSection';

const ProfilePage = () => {
  const user = {
    name: 'Wesam Ab',
    joinDate: 'October 1, 2024', 
  };

  return (
    <div className="bg-lime-200 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto pt-24 ">
        
        <ProfileHeader user={user} />
        {/* Additional profile sections can be added below */}
      </div>
      <div className="container mt-3">
        <ProfileInfoBox />
      </div>
      <div className="container">
        <SeeAllCardsCard />
      </div>
    </div>
  );
};

export default ProfilePage;
