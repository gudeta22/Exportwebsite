import { motion } from "framer-motion";
import homebg from "../assets/images/home2.png";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

// Moving Background Component with Healthcare Theme

const MovingBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Diagonal Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-600" />
        
    {/* Floating Circles with Pulse */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute rounded-full bg-blue-400/30"
        style={{
          width: `${Math.random() * 60 + 30}px`,
          height: `${Math.random() * 60 + 30}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
          
          animate={{
          x: [0, Math.random() * 150 - 75],
          y: [0, Math.random() * 150 - 75],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: Math.random() * 12 + 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
      
    {/* Heartbeat Lines */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-1 bg-green-300/40 rounded-full"
        style={{
          width: `${Math.random() * 100 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100],
          opacity: [0.3, 0.6, 0.3],
          scaleX: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
         
    {/* Subtle Glow Orbs */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full bg-gradient-to-br from-white/30 to-transparent blur-md"
        style={{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 80 - 40],
          y: [0, Math.random() * 80 - 40],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  const buttonVariants = {  
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
  };

  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";

  return (
    <section className="relative h-[50rem] flex items-center justify-center overflow-hidden">
      {/* Moving Background */}
      <MovingBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12">
        {/* Text Content with Overlap */}
        <motion.div
          className="relative z-20 max-w-lg text-center md:text-left bg-white/10 backdrop-blur-md p-6 rounded-xl md:-mr-24"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h2
            className="text-sm md:text-lg uppercase font-semibold text-cyan-200"
            variants={letterVariants}
          >
            Welcome to
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-2"
            variants={textVariants}
          >
            {companyName.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-cyan-100 mt-4 text-base sm:text-lg flex items-center justify-center md:justify-start">
            <FaHeartbeat className="mr-2 text-green-400 animate-pulse" />
            Redefining Healthcare with Trust and Innovation
          </p>
          <Link to="/ourcompany">
            <motion.button
              className="mt-6 bg-white text-black font-bold px-6 py-3  shadow-lg hover:shadow-xl transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              LEARN MORE
            </motion.button>
          </Link>
        </motion.div>

        {/* Image with Interactive Effects */}
        <motion.div
          className="relative z-10 mt-8 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ rotate: 2, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Orbiting Rings with Pulsing Dots */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-400/40 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute w-3 h-3 bg-cyan-300 rounded-full"
              style={{ top: "10%", left: "50%", translateX: "-50%" }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-3 h-3 bg-green-300 rounded-full"
              style={{ bottom: "10%", left: "50%", translateX: "-50%" }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Image */}
          <img
            src={homebg}
            alt="BIOFIRE® FILMARRAY® TORCH"
            className="rounded-lg w-72 sm:w-80 md:w-[450px]"
          />

          {/* Product Label */}
          <div className="absolute -bottom-4 -left-6 bg-white text-black font-semibold text-sm px-4 py-2 rounded-lg shadow-md transform -rotate-6">
            BIOFIRE® FILMARRAY® TORCH
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


