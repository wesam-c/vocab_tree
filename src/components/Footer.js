import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="overflow-x-hidden bg-lime-200 dark:bg-slate-900 text-slate-900 dark:text-lime-200 p-8">
      <div className="flex flex-wrap justify-between items-start max-w-7xl mx-auto">
        
        {/* Vocab Tree Info */}
        <div className="mb-4 w-full sm:w-1/3">
          <h3 className="text-2xl font-bold">Vocab Tree</h3>
          <p className="mt-2 text-lg">Helping you grow your vocabulary, one word at a time.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-4 w-full sm:w-1/3">
          <h4 className="text-md font-bold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="text-lime-600 hover:text-black no-underline text-lg dark:hover:text-white">About Us</a></li>
            <li><a href="#features" className="text-lime-600 hover:text-black no-underline text-lg dark:hover:text-white">Features</a></li>
            <li><a href="#contact" className="text-lime-600 hover:text-black no-underline text-lg dark:hover:text-white">Contact</a></li>
            <li><a href="#privacy" className="text-lime-600 hover:text-black no-underline text-lg dark:hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Links with Icons */}
        <div className="mb-4 w-full sm:w-1/3">
          <h4 className="text-md font-bold">Follow Us</h4>
          <ul className="mt-2 flex space-x-4">
            <li>
              <a href="https://facebook.com" className="text-lime-600 hover:text-black dark:hover:text-white" aria-label="Facebook">
                <FaFacebookF size={26} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="text-lime-600 hover:text-black dark:hover:text-white" aria-label="Twitter">
                <FaTwitter size={26} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="text-lime-600 hover:text-black dark:hover:text-white" aria-label="Instagram">
                <FaInstagram size={26} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="text-lime-600 hover:text-black dark:hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn size={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vocab Tree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
