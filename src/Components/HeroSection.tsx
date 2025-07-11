import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import device1 from '../assets/images/products/home_page1.jpg';
import device2 from '../assets/images/products/home_page2.jpg';

// Styled Background Component
const StyledBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-800" />
  </div>
);

// Floating Card Component
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
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-lg">
        {alt}
      </div>
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

  // Company name and product images
  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";
  const productImages = [
    { src: device1, alt: "Diagnostic Tool" },
    { src: device2, alt: "Monitoring Device" },
  ];

  return (
    <section className="relative min-h-[40rem] sm:min-h-[50rem] md:min-h-[55rem] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-32 bg-gradient-to-b from-cyan-700 to-cyan-900">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            variants={textVariants}
          >
            Innovative <span className="text-teal-300">solutions</span> for healthcare
          </motion.h1>
          <motion.p
            className="text-blue-100 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg"
            variants={letterVariants}
          >
            Explore our advanced medical products designed to improve patient care.
          </motion.p>
          <Link to="/ourcompany">
            <motion.button
              className="mt-6 sm:mt-8 bg-white text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 mx-auto md:mx-0 shadow-md hover:shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
          <motion.p
            className="text-blue-100 mt-6 sm:mt-8 text-xs sm:text-sm flex items-center justify-center md:justify-start"
            variants={letterVariants}
          >
            <FaHeartbeat className="mr-2 text-teal-300" />
            Powered by {companyName}
          </motion.p>
        </motion.div>

        {/* Floating Cards with Medical Products */}
        <div className="relative w-full max-w-xl grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-0">
          {productImages.map((item, index) => (
            <FloatingCard
              key={item.alt}
              src={item.src}
              alt={item.alt}
              className="w-full h-48 sm:h-56 md:h-72"
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;