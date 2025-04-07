import { motion } from "framer-motion";
import homebg from "../assets/images/home2.png";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

// Styled Background Component with Wave Shape
const StyledBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Base Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-900" />

    {/* Animated Circular Wave Shape Behind Image */}
    <motion.div
      className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      initial={{ scale: 1, opacity: 0.6 }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.03 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";

  return (
    <section className="relative h-[50rem] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12">
      {/* Styled Background */}
      <StyledBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-20">
        {/* Text Content */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h2
            className="text-xs sm:text-sm md:text-lg uppercase font-semibold text-cyan-200"
            variants={letterVariants}
          >
            Welcome to
          </motion.h2>
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl font-light text-white mt-2 leading-tight"
            variants={textVariants}
          >
            {companyName.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-cyan-100 mt-4 text-base sm:text-lg flex items-center justify-center md:justify-start">
            <FaHeartbeat className="mr-2 text-green-400" />
            Redefining Healthcare with Trust and Innovation
          </p>
          <Link to="/ourcompany">
            <motion.button
              className="mt-6 bg-white text-black font-bold px-6 py-3 rounded-md transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              LEARN MORE
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex flex-col items-center relative"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={homebg}
            alt="BIOFIRE® FILMARRAY® TORCH"
            className="w-60 sm:w-72 md:w-[450px] relative z-20"
          />
          <div className="text-white text-sm font-medium mt-2 relative z-20 text-center">
            BIOFIRE® FILMARRAY® TORCH
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          className="w-full h-[100px] text-cyan-200"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C280,80 720,100 1440,20 V100 H0 Z"
            fill="currentColor"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              values="
                M0,0 C280,80 720,100 1440,20 V100 H0 Z;
                M0,0 C360,100 680,60 1440,80 V100 H0 Z;
                M0,0 C280,80 720,100 1440,20 V100 H0 Z"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,20 C320,90 760,70 1440,30 V100 H0 Z"
            fill="currentColor"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              values="
                M0,20 C320,90 760,70 1440,30 V100 H0 Z;
                M0,20 C400,60 700,90 1440,40 V100 H0 Z;
                M0,20 C320,90 760,70 1440,30 V100 H0 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;