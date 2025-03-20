import { motion } from "framer-motion";
import { useEffect } from "react";

// Animated Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Floating Particles */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-white/20"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Animated Wave Shape */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-[33vh] sm:h-[40vh] bg-cyan-700/30"
      animate={{
        clipPath: [
          "polygon(0 100%, 100% 100%, 100% 80%, 0% 60%)",
          "polygon(0 100%, 100% 100%, 100% 60%, 0% 80%)",
          "polygon(0 100%, 100% 100%, 100% 80%, 0% 60%)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-cyan-600  text-white py-16 sm:py-24 lg:py-32 min-h-[60vh] w-full">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Overlay to Ensure Text Readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-7xl mx-auto lg:gap-40 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
        {/* Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {/* About <br /> */}
            <span className="text-white">Koji</span> Healthcare <br />
            Solutions
          </h2>
        </div>

        {/* Paragraph */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto md:mx-0">
            At Koji Healthcare Solutions, we are redefining the standards of healthcare innovation. With a focus on providing cutting-edge medical and laboratory solutions, we empower healthcare providers to deliver precise and timely diagnostics, enhancing patient care and outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;