import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import imgone from "../../public/img/my.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="flex items-center justify-between p-4 transition-all duration-300 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 dark:bg-gray-900">
    
      <div className="flex items-center space-x-2">
        <img
          src={imgone}
          alt="Logo"
          className="w-12 h-12 transition-transform border-2 rounded-full hover:scale-110 border-lime-300"
        />
        <h1 className="text-2xl font-bold text-lime-400 dark:text-lime-400">
          SHAMIM AHMAD
        </h1>
      </div>

      <button
        onClick={toggleDarkMode}
        className="flex items-center px-4 py-2 space-x-2 text-sm text-white transition-colors bg-teal-600 border-2 border-teal-500 rounded-lg hover:bg-teal-700 dark:bg-gray-700 dark:text-white dark:border-gray-500"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

    
      <button className="text-white lg:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

  
      <ul
        className={`lg:flex space-x-6 absolute lg:static top-16 right-4 lg:top-auto lg:right-auto text-black rounded-lg lg:shadow-none transition-all duration-300 z-50 ${isMenuOpen ? "block" : "hidden"
          } bg-gradient-to-r from-orange-400 to-lime-400 via-teal-500 to-green-500 dark:bg-gray-800 font-bold`}
      >
        <li>
          <Link
            to="/"
            className="block px-4 py-2 transition-colors lg:py-0 hover:text-orange-600 hover:underline"
          >
             About
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block px-4 py-2 transition-colors lg:py-0 hover:text-orange-600 hover:underline"
          >
           Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block px-4 py-2 transition-colors lg:py-0 hover:text-orange-600 hover:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-4 py-2 transition-colors lg:py-0 hover:text-orange-600 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
