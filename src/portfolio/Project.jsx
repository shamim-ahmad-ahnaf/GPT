import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A sleek portfolio showcasing my skills and projects. Built using React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "A functional e-commerce platform featuring product filters and cart management.",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A task organizer to efficiently manage daily goals and priorities. Built with React and Firebase.",
      link: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 via-purple-800 to-lime-700 dark:bg-gray-900">
      <div className="w-full max-w-6xl px-6 py-12 text-center dark:bg-gray-800">
        <h1 className="mb-8 text-5xl font-bold text-teal-500 sm:text-6xl">
          My Projects
        </h1>
        <p className="mb-12 text-lg text-yellow-400 sm:text-xl">
          Dive into my creations and explore the technologies I’ve worked with.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="relative p-6 transition-transform transform rounded-lg shadow-xl bg-gradient-to-br from-indigo-700 via-purple-700 to-teal-700 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:via-teal-500 hover:to-pink-500 hover:shadow-pink-500/50"
            >
              <h3 className="mb-4 text-2xl font-semibold text-teal-200">
                {project.title}
              </h3>
              <p className="mb-6 text-teal-100">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-6 py-2 text-sm font-medium text-teal-100 rounded-lg shadow-md bg-gradient-to-r from-teal-600 via-purple-600 to-indigo-600 hover:bg-gradient-to-br hover:from-pink-600 hover:via-teal-600 hover:to-indigo-600 hover:text-teal-50 hover:shadow-lg hover:scale-110"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
