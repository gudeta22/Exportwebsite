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
        }
      }
       
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

const NavProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-cyan-600 text-white py-32">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Overlay to Ensure Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-white drop-shadow-lg">OurProducts</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
At Koji Healthcare Solutions Pvt. Ltd., we proudly offer a curated selection of high-quality medical devices designed to meet the diverse needs of Ethiopia’s public and private hospitals          </p>
        </div>
      </div>
    </section>
  );
};

export default NavProduct;