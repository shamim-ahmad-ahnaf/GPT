import React from 'react';

function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 dark:bg-gray-900">
      <div className="w-full max-w-2xl p-8 transition-transform transform bg-white rounded-lg shadow-xl sm:p-10 md:p-12 lg:p-16 dark:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
        
        {/* Heading */}
        <h1 className="mb-6 text-4xl font-extrabold text-transparent transition-all sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600">
          About Me
        </h1>

        {/* Introduction */}
        <p className="mb-8 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
          Hello! I'm a passionate front-end developer with a focus on building beautiful and functional websites using <span className="font-semibold text-teal-500">React</span> and <span className="font-semibold text-purple-500">Tailwind CSS</span>. I strive to create user-friendly, responsive, and performant web applications.
        </p>

        {/* Skills Section */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-gray-100">Skills</h2>
          <ul className="space-y-2 text-lg text-left text-gray-700 list-disc sm:text-xl dark:text-gray-300">
            <li className="transition-colors hover:text-teal-500">React.js & Next.js</li>
            <li className="transition-colors hover:text-teal-500">Tailwind CSS & Bootstrap</li>
            <li className="transition-colors hover:text-teal-500">JavaScript (ES6+), HTML5, CSS3</li>
            <li className="transition-colors hover:text-teal-500">Git, GitHub, Version Control</li>
            <li className="transition-colors hover:text-teal-500">API Integration (REST, GraphQL)</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-gray-100">Experience</h2>
          <p className="text-lg text-gray-700 sm:text-xl dark:text-gray-300">
            I have worked with several projects where I utilized React.js to build dynamic, fast, and scalable applications. I also have experience working with responsive designs using Tailwind CSS, ensuring optimal user experience across devices.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-gray-100">Let's Connect</h2>
          <p className="mb-4 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
            Feel free to reach out if you're looking for a front-end developer for your next project or if you just want to connect and chat about technology!
          </p>
          <button className="px-8 py-3 text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600 hover:opacity-80 hover:scale-110">
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;
