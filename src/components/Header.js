import React, { useState } from 'react';
import logo from '../image/logo.png';
import '../index.css';
import { IoIosClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-transparent shadow-none fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 py-4'>
        {/* Logo, Name, and Navigation Links in the same background */}
        <div className='flex justify-between items-center p-0.5 border-white/15 rounded-full bg-white/50 backdrop-blur'>
          {/* Logo and Name */}
          <div className='flex items-center space-x-4'>
            <img src={logo} alt="Vocab Tree Logo" className='h-14' />
            <div className='md:text-xl text-2xl font-bold text-lime-900 sofadi-one-regular'>Vocab Tree</div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className='md:hidden p-2'>
            {isOpen ? <IoIosClose className='text-4xl' /> : <IoIosMenu className='text-4xl' />}
          </button>

          {/* Navigation Links */}
          <nav className={`md:flex items-center justify-between space-x-8 hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
            {/* Left-side Links */}
            <div className="flex space-x-8">
              <a href="/" className='nav-item'>Home</a>
              <a href="/about" className='nav-item'>About</a>
              <a href="/blog" className='nav-item'>Blog</a>
              <a href="/contact" className='nav-item'>Contact</a>
            </div>

            {/* Right-side Links */}
            <div className="flex space-x-8">
              <a href="/SignIn" className='nav-item text-lime-700 hover:text-lime-400'>Sign In</a>
              <a href="/SignUp" className='nav-item text-lime-700 hover:text-lime-400'>Sign Up</a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} p-4 bg-white rounded shadow-md`}>
        {/* Left-side Links */}
        <a href="/" className='block nav-item py-2'>Home</a>
        <a href="/about" className='block nav-item py-2'>About</a>
        <a href="/blog" className='block nav-item py-2'>Blog</a>
        <a href="/contact" className='block nav-item py-2'>Contact</a>
        
        {/* Right-side Links */}
        <a href="/signin" className='block nav-item py-2'>Sign In</a>
        <a href="/signup" className='block nav-item py-2'>Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
