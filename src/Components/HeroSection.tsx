import { motion } from "framer-motion";
import homebg from "../assets/images/home2.png";
import { Link } from "react-router-dom";

// Enhanced Moving Background Shapes Component
const MovingBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Floating Circles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute rounded-full bg-white/10"
        style={{
          width: `${Math.random() * 80 + 40}px`,
          height: `${Math.random() * 80 + 40}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Drifting Lines */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-0.5 bg-white/20"
        style={{
          width: `${Math.random() * 150 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 300 - 150],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, Math.random() * 90 - 45],
        }}
        transition={{
          duration: Math.random() * 15 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* New: Subtle Gradient Orbs */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full bg-gradient-to-br from-white/20 to-transparent blur-lg"
        style={{
          width: `${Math.random() * 120 + 60}px`,
          height: `${Math.random() * 120 + 60}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: Math.random() * 12 + 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* New: Faint Pulsing Stars */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute rounded-full bg-white"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* New: Gentle Wave Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"
      animate={{
        opacity: [0.1, 0.2, 0.1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

const HeroSection = () => {
  // Animation variants for Framer Motion
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <section className="relative bg-cyan-600 text-white h-[48rem] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-16 lg:gap-72 overflow-hidden">
      {/* Moving Background */}
      <MovingBackground />

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-2xl text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-sm md:text-lg uppercase font-semibold text-gray-300">
          Welcome to
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light fontstyle">
          <span className="text-white fontstyle ">KOJI</span> HEALTHCARE <br /> SOLUTIONS
          PVT. LTD. CO.
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg">
          Redefining Healthcare with Trust and Innovation
        </p>
        <Link to='/ourcompany'>
        <button className="mt-6 bg-white text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition duration-300">
          LEARN MORE
        </button>
        </Link>
      </motion.div>

      {/* Image with Circular Overlay, Orbiting Ring, and Text Labels */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {/* Circular Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white/10 rounded-full" />

        {/* Additional Circle */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white/20 rounded-full" />

        {/* Orbiting Ring (Stylish Moving Element) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[480px] md:h-[480px] border-2 border-dashed border-white/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Glowing Dot on the Ring */}
          <motion.div
            className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
            style={{ top: "0%", left: "50%", translateX: "-50%" }}
            animate={{
              boxShadow: [
                "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                "0 0 20px 10px rgba(255, 255, 255, 0.8)",
                "0 0 10px 5px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Image */}
        <img
          src={homebg}
          alt="New Image"
          className="rounded-lg w-64 sm:w-80 md:w-[400px] relative"
        />

        {/* Main Product Label */}
        <div className="absolute bottom-1/3 left-[-40px] md:left-[-70px] bg-white text-black font-bold text-sm md:text-base px-4 py-2 rounded-full shadow-md">
          BIOFIRE® FILMARRAY® TORCH
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;