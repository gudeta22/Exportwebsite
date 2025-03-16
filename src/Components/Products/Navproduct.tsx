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
      className="absolute bottom-0 left-0 w-full h-1/3 bg-cyan-700/30"
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

const Navproduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="relative bg-cyan-600 text-white py-32">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Overlay to Ensure Text Readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Heading */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Our <br />
            <span className="text-white">Products</span>
          </h2>
        </div>

        {/* Paragraph */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-base md:text-lg opacity-90">
            Discover our wide range of innovative medical products designed to meet the highest standards of quality and performance. From advanced diagnostic tools to essential medical supplies, our products are crafted to support healthcare professionals in delivering exceptional patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navproduct;