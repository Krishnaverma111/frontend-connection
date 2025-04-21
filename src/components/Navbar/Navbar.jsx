import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Contact'];
  const profileOptions = ['Login', 'Signup', 'Signout'];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-4 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
          MyApp
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Profile Icon (Desktop) */}
        <div
          className="hidden md:flex relative ml-4 cursor-pointer"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
        >
          <FaUserCircle className="text-3xl hover:text-yellow-300 transition" />
          {profileOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white text-black rounded-xl shadow-lg overflow-hidden animate-fadeIn z-50">
              <ul className="py-2">
                {profileOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-3 text-lg font-medium text-white animate-fadeIn">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
