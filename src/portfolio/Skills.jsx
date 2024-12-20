

export default function Skills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:bg-gray-900">
    <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 p-6 transition-transform transform bg-white rounded-lg shadow-xl bg-opacity-90 backdrop-blur-lg dark:bg-gray-800">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-gray-200">
          Shamim Ahmad
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300">
          A passionate developer crafting user-centric web experiences.
        </p>
      </div>

      {/* About Content Section */}
      <div className="flex flex-col space-y-8">
        {/* About */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">
            About Me
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            I'm a frontend developer with expertise in{" "}
            <span className="font-semibold text-teal-500">React.js</span> and{" "}
            <span className="font-semibold text-purple-500">
              Tailwind CSS
            </span>
            . I specialize in building interactive and dynamic web
            applications with a focus on performance and accessibility.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">
            My Skills
          </h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "React.js",
              "Tailwind CSS",
              "JavaScript",
              "API Integration",
              "Git & GitHub",
              "Responsive Design",
            ].map((skill, index) => (
              <li
                key={index}
                className="px-3 py-2 text-center text-white rounded-md shadow-md bg-gradient-to-r from-teal-500 to-lime-500 dark:bg-gray-700 dark:from-teal-600 dark:to-lime-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <button className="px-6 py-3 text-lg font-semibold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
