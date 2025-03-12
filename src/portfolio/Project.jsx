import React from "react";

function Projects() {

  const projectData = [
    {
      title: "Portfolio Website",
      description:"This is my personal portfolio website. It showcases my projects and skills.",
      link: "https://personal-portfolio-three-omega-89.vercel.app/",
      github: "https://github.com/shamim-ahmad-ahnaf/Personal-portfolio",
      image: "/img/port.jpg",

    },
    {
      title: "E-commerce RESTAN",
      description:
        "A functional e-commerce platform featuring product filters and cart management.",
      link: "/e-commerce",
      github: "https://github.com/yourusername/e-commerce",
      image: "public/img/RESTAN.png",
    },
    {
      title: "Task Manager",
      description:
        "A task organizer to efficiently manage daily goals and priorities. Built with React and Firebase.",
      link: "/task-manager",
      github: "https://github.com/yourusername/task-manager",
      image: "https://via.placeholder.com/400x250?text=Task+Manager",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black">
      <div className="w-full px-6 py-16 max-w-7xl">
        <h1 className="mb-10 text-4xl font-bold text-center text-lime-500 sm:text-5xl">
          My Projects
        </h1>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-300">
          Explore my latest creations built with modern web technologies.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform bg-gray-900 border-2 rounded-lg shadow-md border-lime-400 hover:shadow-lg hover:scale-105"
            >
              <div
                className="h-48 bg-center bg-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-6 text-white">
                <h3 className="mb-3 text-2xl font-semibold text-lime-400">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-gray-400">{project.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="px-4 py-2 text-sm font-medium text-white border-2 rounded hover:bg-lime-700 border-lime-400 hover:text-black"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 text-sm font-medium border-2 rounded text-black-400 border-lime-400 hover:bg-lime-700 hover:text-black"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
