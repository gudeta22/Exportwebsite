import { motion } from "framer-motion";
import homebg from "../assets/images/home2.png";

const HeroSection = () => {
  return (
    <section className="relative bg-cyan-600 text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-16 lg:gap-72">
      {/* Background Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/background-pattern.png')" }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <h2 className="text-sm md:text-lg uppercase font-semibold text-gray-300">
          Welcome to
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-white">Z</span> HEALTHCARE <br /> SOLUTIONS
          PVT. LTD. CO.
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg">
          Redefining Healthcare with Trust and Innovation
        </p>
        <button className="mt-6 bg-white text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Image with Circular Overlay and Text Labels */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Circular Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white/10 rounded-full" />

        {/* Additional Circle */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white/20 rounded-full" />

        {/* Image */}
        <img
          src={homebg}
          alt="New Image"
          className="rounded-lg w-64 sm:w-80 md:w-[400px] relative"
        />

        {/* Labels
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm md:text-base text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
          Comprehensive panels
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-sm md:text-base text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
          Streamlined Workflow
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm md:text-base text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
          Fast Answers
        </div> */}

        {/* Main Product Label */}
        <div className="absolute bottom-1/3 left-[-40px]  md:left-[-70px] bg-white text-black font-bold text-sm md:text-base px-4 py-2 rounded-full shadow-md">
          BIOFIRE® FILMARRAY® TORCH
        </div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
