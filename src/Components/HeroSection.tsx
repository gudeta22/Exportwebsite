import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import device1 from '../assets/images/products/home_page1.jpg';
import device2 from '../assets/images/products/home_page2.jpg';

const StyledBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 via-cyan-800 to-cyan-800 opacity-95 animate-gradient-flow" />
    <div className="absolute inset-0 ripple ripple-1" />
    <div className="absolute inset-0 ripple ripple-2" />
    <div className="absolute inset-0 ripple ripple-3" />
    <div className="absolute inset-0 ripple ripple-4" />
    <style>{`
      .animate-gradient-flow {
        background-size: 400% 400%;
        animation: gradientFlow 16s ease-in-out infinite;
      }
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .ripple {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(6, 182, 212, 0.45) 5%, transparent 65%);
        opacity: 0.55;
      }
      .ripple-1 { animation: ripple 18s ease-in-out infinite; }
      .ripple-2 { animation: ripple 22s ease-in-out infinite 2s; }
      .ripple-3 { animation: ripple 20s ease-in-out infinite 4s; }
      .ripple-4 { animation: ripple 24s ease-in-out infinite 6s; }
      @keyframes ripple {
        0% { transform: scale(0.7); opacity: 0.55; }
        50% { transform: scale(2.3); opacity: 0.25; }
        100% { transform: scale(0.7); opacity: 0.55; }
      }
    `}</style>
  </div>
);

interface FloatingCardProps {
  src: string;
  alt: string;
  className?: string;
  delay: number;
}

const FloatingCard = ({ src, alt, className, delay }: FloatingCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, x: 10 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`relative bg-blue-200/20 backdrop-blur-md rounded-xl shadow-xl overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
};

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#f5f5f5",
      transition: { duration: 0.3 },
    },
  };

  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";
  const productImages = [
    { src: device1, alt: "Diagnostic Tool" },
    { src: device2, alt: "Monitoring Device" },
  ];

  return (
    <section className="relative min-h-[45rem] sm:min-h-[55rem] md:min-h-[55rem] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-32 bg-gradient-to-b from-cyan-700 to-cyan-900">
      <StyledBackground />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 sm:gap-12">
        {/* Text Content */}
        <motion.div
          className="max-w-md sm:max-w-lg text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
            variants={textVariants}
          >
            Innovative <span className="text-teal-300">solutions</span> for healthcare
          </motion.h1>
          <motion.p
            className="text-blue-100 mt-6 sm:mt-8 text-base sm:text-lg md:text-xl"
            variants={letterVariants}
          >
            Explore our advanced medical products designed to improve patient care.
          </motion.p>
          <Link to="/ourcompany">
            <motion.button
              className="mt-8 sm:mt-10 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg flex items-center justify-center gap-3 transition duration-300 mx-auto md:mx-0 shadow-md hover:shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
          <motion.p
            className="text-blue-100 mt-8 sm:mt-10 text-sm sm:text-base flex items-center justify-center md:justify-start"
            variants={letterVariants}
          >
            <FaHeartbeat className="mr-2 text-teal-300 text-xl" />
            Powered by {companyName}
          </motion.p>
        </motion.div>

        {/* Floating Cards */}
        <div className="relative w-full max-w-xl grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 md:mt-0">
          {productImages.map((item, index) => (
            <FloatingCard
              key={item.alt}
              src={item.src}
              alt={item.alt}
              className="w-full h-56 sm:h-72 md:h-[22rem] lg:h-[26rem]"
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
