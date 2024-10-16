import React, { useState, useRef, useEffect } from 'react';
import logo from '../image/logo.png';
import '../index.css';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useAuth } from '../context/AuthContext';
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className='bg-transparent shadow-none fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center p-0.5 border-white/15 rounded-full bg-white/50 backdrop-blur'>
          <div className='flex items-center space-x-4'>
            <img src={logo} alt="Vocab Tree Logo" className='h-14' />
            <div className='md:text-xl text-2xl font-bold text-lime-900 dark:text-black sofadi-one-regular'>Vocab Tree</div>
          </div>

          <button onClick={toggleMenu} className='md:hidden p-2'>
            {isOpen ? <IoIosClose className='text-4xl' /> : <IoIosMenu className='text-4xl' />}
          </button>

          <nav className={`md:flex items-center justify-between space-x-8 hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
            {!currentUser && (
              <div className="flex space-x-8">
                <a href="/" className='nav-item'>Home</a>
                <a href="/about" className='nav-item'>About</a>
                <a href="/blog" className='nav-item'>Blog</a>
                <a href="/contact" className='nav-item'>Contact</a>
              </div>
            )}

            {currentUser ? (
              <div className="flex items-center relative mr-7">
                <a href="/" className="nav-item text-lime-700 dark:text-black hover:text-lime-400 dark:hover:text-slate-600 mr-4">Home</a>
                <a href="/vocabTreePage" className="nav-item text-lime-700 dark:text-black hover:text-lime-400 dark:hover:text-slate-600 mr-4">Add</a>
                <a href="/cards" className="nav-item text-lime-700 dark:text-black hover:text-lime-400 dark:hover:text-slate-600 mr-4">Cards</a>
                <div className="relative" ref={dropdownRef}>
                  <button onClick={toggleProfileMenu} className="focus:outline-none" style={{ boxShadow: 'none' }}>
                    <FaUserCircle className="text-4xl text-lime-800 dark:text-black rounded-full" />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 nav-item">Profile</a>
                      <a href="/editprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 nav-item">Edit Profile</a>
                      <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 nav-item">Settings</a>
                      
                      {/* Theme Toggle Option moved above Logout */}
                      <button 
                        onClick={toggleTheme} 
                        className="flex items-center justify-between px-4 py-2 w-full text-left"
                      >
                        <span className="text-sm text-gray-700 font-bold">Theme</span>
                        {isDarkMode ? (
                          <FaSun className="text-yellow-500" />
                        ) : (
                          <FaMoon className="text-gray-600" />
                        )}
                      </button>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm"
                        style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem' }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'red';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = 'red';
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex space-x-8">
                <a href="/signin" className='nav-item text-lime-700 hover:text-lime-400'>Sign In</a>
                <a href="/signup" className='nav-item text-lime-700 hover:text-lime-400'>Sign Up</a>
              </div>
            )}
          </nav>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} p-4 bg-white rounded shadow-md`}>
        {!currentUser && (
          <>
            <a href="/" className='block nav-item py-2'>Home</a>
            <a href="/about" className='block nav-item py-2'>About</a>
            <a href="/blog" className='block nav-item py-2'>Blog</a>
            <a href="/contact" className='block nav-item py-2'>Contact</a>
          </>
        )}
        {currentUser ? (
          <>
            <a href="/cards" className='block nav-item py-2'>Cards</a>
            <a href="/profile" className='block nav-item py-2'>Edit Profile</a>
            <a href="/settings" className='block nav-item py-2'>Settings</a>
          </>
        ) : (
          <>
            <a href="/signin" className='block nav-item py-2'>Sign In</a>
            <a href="/signup" className='block nav-item py-2'>Sign Up</a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
