import React from 'react';
import LandingPageBody from '../components/LandingPageBody';
import Header from '../components/Header';

const Landing = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen bg-lime-200 dark:bg-slate-900 " 
      
    >
        <Header />
        <LandingPageBody />
    </div>
  );
};

export default Landing;
