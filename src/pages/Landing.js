import React from 'react';
import LandingPageBody from '../components/LandingPageBody';
import Header from '../components/Header';
import Banner from '../components/Banner/Banner';
import Users from '../components/Users/Users';

const Landing = () => {
  return (
    <div 
      className=" overflow-x-hidden bg-lime-200 dark:bg-slate-900 " 
      
    >
        <Header />
        <LandingPageBody />
        <Banner />
        <Users />
    </div>
  );
};

export default Landing;
