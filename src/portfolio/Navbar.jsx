import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed right-0 z-50 flex flex-col items-center w-auto py-0 space-y-8 -translate-y-1/2 bg-transparent shadow-none top-1/2">
      {[  
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/skills", icon: <FaUserAlt />, label: "Skills" },
        { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
        { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
      ].map(({ to, icon, label }, index) => (
        <Link
          key={index}
          to={to}
          className="relative flex items-center justify-center p-4 transition-all duration-500 ease-out bg-gray-900 rounded-full shadow-lg text-lime-500 group hover:shadow-2xl hover:bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 hover:scale-110"
          aria-label={label}
        >
          {/* Icon */}
          <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:text-yellow-300">
            {icon}
          </span>

          {/* Tooltip */}
          <span
            className="absolute px-3 py-1 text-sm font-medium text-gray-100 transition-all duration-500 transform rounded-lg shadow-md opacity-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 ring-1 ring-white backdrop-blur-md group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1/2 group-hover:-translate-x-full"
            style={{
              top: "50%",
              right: "100%",
              marginRight: "4px",
              transform: "translateY(-50%)",
            }}
          >
            {label}
          </span>

          {/* Decorative Glow */}
          <div className="absolute inset-0 w-2 h-2 transition-all duration-300 rounded-full bg-gradient-to-t from-yellow-400 to-orange-500 group-hover:w-full group-hover:h-full group-hover:opacity-20"></div>
          <div className="absolute w-10 h-10 rounded-full opacity-0 bg-gradient-to-br from-yellow-300 via-red-400 to-purple-500 blur-2xl group-hover:opacity-10"></div>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
