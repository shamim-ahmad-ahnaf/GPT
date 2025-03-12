
import { Link } from "react-router-dom";




function About() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black dark:bg-black">

      <div className="absolute w-full h-full opacity-30 animate-color-change"></div>
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute w-[300%] h-[300%] bg-gradient-to-r from-green-500 via-lime-400 to-green-800 opacity-20 animate-slow-pan"></div>
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-t from-green-700 via-black to-lime-600 opacity-30 animate-slow-pan-reverse"></div>

        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-5 h-5 bg-gradient-to-br from-green-400 to-lime-500 rounded-full blur-lg opacity-60 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        <div className="absolute border-2 border-green-500 rounded-full w-80 h-80 opacity-20 blur-2xl animate-rotate-slow"></div>
        <div className="absolute border-2 rounded-full w-96 h-96 border-lime-500 opacity-10 blur-3xl animate-rotate-slower"></div>
      </div>


      <div className="relative z-10 max-w-xs p-6 text-center transition duration-500 transform shadow-lg shadow-green-lg sm:p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-3xl hover:scale-105 sm:max-w-md lg:max-w-lg sm:px-8 sm:py-3 sm:mt-6 sm:text-lg hover:shadow-lime-500/50 ">

        <div className="flex flex-col items-center">
          <div className="relative">

            

          


        
            <div className="absolute top-0 left-0 w-full h-full border-4 rounded-full border-lime-500 animate-pulse"></div>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-wide sm:mt-6 sm:text-5xl text-lime-400 animate-fade-in">
            SHAMIM AHMAD
          </h1>
          <p className="mt-2 text-sm text-gray-300 sm:text-lg">
            Creative <span className="text-green-400">Web Developer</span> &{" "}
            <span className="text-lime-400">Designer</span>
          </p>
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <p className="text-sm text-gray-400 sm:text-lg animate-fade-in-delayed">
            Crafting visually stunning digital experiences.
          </p>
          <Link
            to="/projects"
            className="inline-block px-6 py-2 mt-4 text-sm font-bold text-black transition-all duration-300 transform rounded-full shadow-lg sm:px-8 sm:py-3 sm:mt-6 sm:text-lg bg-gradient-to-r from-green-400 to-lime-500 hover:shadow-lime-500/50 hover:scale-110"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </div>

  );
}

export default About;
