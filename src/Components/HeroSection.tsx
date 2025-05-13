import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import device1 from '../assets/images/products/Endoscopy.jpeg';
import device2 from '../assets/images/products/OR.jpeg';
import device3 from '../assets/images/products/ultrasound.jpeg';
import device4 from '../assets/images/products/Laparascopy.jpeg';

// Styled Background Component
const StyledBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-600" />
    <motion.div
      className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      initial={{ scale: 1, opacity: 0.4 }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
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
      className={`relative bg-blue-200/20 backdrop-blur-sm rounded-xl shadow-lg border border-blue-300/30 overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
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
      backgroundColor: "#e0e0e0",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.2, color: "#ffffff", transition: { duration: 0.3 } },
  };

  const companyName = "KOJI HEALTHCARE SOLUTIONS PVT. LTD. CO.";
  const productImages = [
    { src: device1, alt: "Diagnostic Tool" },
    { src: device2, alt: "Monitoring Device" },
    { src: device3, alt: "Surgical Equipment" },
    { src: device4, alt: "Therapy System" },
  ];

  return (
    <section className="relative min-h-[40rem] sm:min-h-[50rem] md:min-h-[55rem] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-32">
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
            Innovative <span className="text-teal-400">solutions</span> for healthcare
          </motion.h1>
          <motion.p
            className="text-blue-200 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg"
            variants={letterVariants}
          >
            Explore our advanced medical products designed to improve patient care.
          </motion.p>
          <Link to="/ourcompany">
            <motion.button
              className="mt-6 sm:mt-8 bg-white text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center justify-center gap-2 transition duration-300 mx-auto md:mx-0"
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
            className="text-blue-200 mt-6 sm:mt-8 text-xs sm:text-sm flex items-center justify-center md:justify-start"
            variants={letterVariants}
          >
            <FaHeartbeat className="mr-2 text-green-400" />
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
              className="w-full h-48 sm:h-56 md:h-60"
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="w-full h-[60px] sm:h-[80px] md:h-[100px] text-cyan-200" viewBox="0 0 1440 100" preserveAspectRatio="none">
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