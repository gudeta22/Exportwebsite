import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStethoscope, FaArrowRight } from "react-icons/fa";
import device1 from "../assets/images/products/home_page1.jpg";
import device2 from "../assets/images/products/home_page2.jpg";
import Bg from "../assets/images/doctor_bg.jpg";

const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      className="relative min-h-[40rem] sm:min-h-[45rem] md:min-h-[50rem] flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 max-w-7xl items-center w-full">
        {/* ✅ Text Section */}
        <motion.div
          className="text-center md:text-left space-y-4 sm:space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white"
            variants={fadeUp}
          >
            Redefining <span className="text-cyan-400">Healthcare</span> in Ethiopia
          </motion.h1>

          <motion.p
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0"
            variants={fadeUp}
          >
            From diagnostic devices to innovative medical solutions, we empower
            healthcare providers with tools that save lives and improve outcomes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={fadeUp}
          >
            <Link to="/products">
              <button className="bg-cyan-600 hover:bg-cyan-500 transition text-white font-medium px-5 sm:px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm sm:text-base">
                Explore Products <FaArrowRight />
              </button>
            </Link>
{/* 
            <Link to="/contact">
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-2 sm:px-6 py-3 rounded-lg shadow-lg text-sm sm:text-base">
                Contact Us
              </button>
            </Link> */}
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-cyan-300 mt-4 justify-center md:justify-start"
            variants={fadeUp}
          >
            <FaStethoscope className="text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm md:text-base">
              Trusted Partner in Healthcare Products
            </span>
          </motion.div>
        </motion.div>

        {/* ✅ Image Section with Creative Layout */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={device1}
              alt="Medical Device"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-4 sm:-right-6 md:-right-8"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={device2}
              alt="Healthcare Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
