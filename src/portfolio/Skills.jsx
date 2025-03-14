import React, { useState } from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiHtml5, SiCss3, SiJquery, SiBootstrap, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 animate-spin-slow" />, color: "text-orange-500", details: "HyperText Markup Language" },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 animate-spin-slow" />, color: "text-blue-600", details: "Cascading Style Sheets" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 animate-spin-slow" />, color: "text-purple-500", details: "A framework for building responsive websites" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 animate-spin-slow" />, color: "text-teal-300", details: "A utility-first CSS framework" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-600 animate-spin-slow" />, color: "text-yellow-500", details: "Programming language of the web" },
    { name: "jQuery", icon: <SiJquery className="text-blue-600 animate-spin-slow" />, color: "text-blue-300", details: "A JavaScript library for DOM manipulation" },
    { name: "React.js", icon: <FaReact className="text-blue-600 animate-spin-slow" />, color: "text-blue-600", details: "A JavaScript library for building user interfaces" },
    { name: "Next.js", icon: <SiNextdotjs className="p-1 text-black bg-green-500 rounded-full animate-spin-slow" />, color: "text-green-300", details: "A React framework for building production-grade apps" },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 animate-spin-slow" />, color: "text-gray-300", details: "Platform for version control and collaboration" },
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="w-[90%] max-w-[1000px] p-8 rounded-3xl shadow-2xl bg-gradient-to-br  border border-lime-600 mt-5 mb-5">
        <h1 className="mb-8 text-5xl font-extrabold text-center text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-lime-400 to-green-500 animate-bounce">
          My Skills
        </h1>
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              onClick={() => openModal(skill)}
              className="relative flex flex-col items-center p-8 text-lg font-medium text-white transition-transform transform shadow-2xl cursor-pointer rounded-3xl bg-gradient-to-r from-teal-600 to-green-600 hover:scale-105 hover:shadow-3xl hover:from-lime-500 hover:to-green-500"
            >
              <div
                className={`w-24 h-24 mb-6 flex items-center justify-center text-5xl font-bold rounded-full border-8 border-lime-400 shadow-inner bg-gray-900 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <span className={`font-extrabold text-2xl tracking-wider ${skill.color}`}>
                {skill.name}
              </span>
              <div className="absolute px-3 py-2 text-sm font-light text-gray-300 bg-black bg-opacity-50 rounded-full bottom-1 right-2 backdrop-blur-md">Details</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal Component */}
      {isModalOpen && selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="w-[90%] max-w-md p-6 sm:p-8 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl text-lime-500 shadow-2xl">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">{selectedSkill.name}</h2>
            <p className="mb-4 text-base sm:text-lg">{selectedSkill.details}</p>
            <button onClick={closeModal} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
