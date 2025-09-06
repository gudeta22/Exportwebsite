import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import device1 from '../assets/images/products/home_page1.jpg';
import device2 from '../assets/images/products/home_page2.jpg';
import Bg from '../assets/images/doctor_bg.jpg'; // ✅ background image

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";

  return (
    <section
      className="relative min-h-[45rem] sm:min-h-[50rem] md:min-h-[55rem] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-20 sm:py-28 md:py-32"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 sm:gap-14">
        {/* ✅ Text Section */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.p
            className="uppercase tracking-widest text-white font-semibold mb-3 text-sm sm:text-base"
            variants={textVariants}
          >
            Welcome To
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            variants={textVariants}
          >
            KOJI <span className="text-teal-300">Healthcare</span>
          </motion.h1>
          <motion.p
            className="text-blue-100 mt-6 text-base sm:text-lg md:text-xl"
            variants={textVariants}
          >
            With innovative solutions, we deliver advanced medical products
            designed to improve patient care and well-being.
          </motion.p>

          <Link to="/ourcompany">
            <motion.button
              className="mt-8 bg-cyan-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>

          <motion.p
            className="text-blue-100 mt-6 text-sm sm:text-base flex items-center justify-center md:justify-start"
            variants={textVariants}
          >
            <FaHeartbeat className="mr-2 text-teal-300 text-lg sm:text-xl" />
            Powered by {companyName}
          </motion.p>
        </motion.div>

        {/* ✅ Circular Overlapping Images */}
        <div className="relative flex items-center justify-center w-full max-w-md sm:max-w-xl md:max-w-2xl mt-12 md:mt-0">
          {/* First circle (bigger main image) */}
          <motion.div
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-cyan-700 overflow-hidden shadow-2xl z-20"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={device1} alt="Pharma product" className="w-full h-full object-cover" />
          </motion.div>

          {/* Second circle (slightly smaller, overlapped) */}
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-cyan-700 overflow-hidden shadow-2xl absolute 
                       right-[-1rem] sm:right-[-2rem] md:right-[-5rem] 
                       bottom-[-1rem] sm:bottom-[-3rem] md:bottom-[-5rem] z-10"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={device2} alt="Healthcare technology" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
