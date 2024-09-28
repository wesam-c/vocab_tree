import React, { useState } from 'react';
import logo from '../image/logo.png';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-transparent shadow-none fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo and Name */}
        <div className='flex items-center space-x-4'>
          <img src={logo} alt="Vocab Tree Logo" className='h-20' />
          <div className='text-3xl font-bold text-lime-900 sofadi-one-regular'>Vocab Tree</div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className='md:hidden p-2'>
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex space-x-8 hidden p-0.5 border-white/15 rounded-full bg-white/50 backdrop-blur ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/" className='nav-item'>Home</a>
          <a href="/VocabTree" className='nav-item'>Try it</a>
        </nav>
      </div>

      {/* Mobile Side Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} p-4 bg-white rounded shadow-md`}>
        <a href="/" className='block nav-item py-2'>Home</a>
        <a href="/VocabTree" className='block nav-item py-2'>Try it</a>
      </div>
    </header>
  );
};

export default Header;
