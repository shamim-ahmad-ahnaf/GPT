import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 transition-all duration-300 bg-gray-600 dark:bg-black">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={imgone}
          alt="Logo"
          className="w-10 h-10 transition-transform border-2 rounded-full hover:scale-105 border-lime-500"
        />
        <h1 className="text-xl font-bold text-lime-400">SHAMIM AHMAD</h1>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center px-3 py-1 space-x-2 text-sm text-green-600 transition-colors border border-green-500 rounded-lg lg:mr-4"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>

      {/* Hamburger Menu */}
      <button
        className="text-white lg:hidden"
        onClick={toggleMenu}
      >
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

      {/* Navigation Links */}
      <ul
        className={`lg:flex space-x-6 absolute lg:static top-16 right-4 lg:top-auto lg:right-auto bg-gray-600 dark:bg-black lg:bg-transparent text-white rounded-lg shadow-lg lg:shadow-none transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link to="/" className="block px-4 py-2 text-green-500 transition-colors lg:py-0 hover:text-orange-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block px-4 py-2 text-green-500 transition-colors lg:py-0 hover:text-orange-600 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="block px-4 py-2 text-green-500 transition-colors lg:py-0 hover:text-orange-600 hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block px-4 py-2 text-green-500 transition-colors lg:py-0 hover:text-orange-600 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
