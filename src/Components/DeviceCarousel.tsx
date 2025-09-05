import { useState, useEffect } from "react";
import { ShieldCheck, RefreshCcw, FlaskConical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import carousel1 from "../assets/images/carouse-2.png";
import carousel2 from "../assets/images/carousel-1.png";

const HematologySystem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      image: carousel1,
      title: "Advanced ECG Monitoring",
      description:
        "A powerful 12-lead ECG system designed to support hospitals with accurate and reliable cardiac diagnostics.",
      features: [
        {
          icon: <FlaskConical size={20} />,
          title: "Optimized Signal",
          description: "High-precision electrodes ensure consistent accuracy.",
        },
        {
          icon: <RefreshCcw size={20} />,
          title: "Durable Design",
          description: "Engineered for long-term performance in clinical use.",
        },
        {
          icon: <ShieldCheck size={20} />,
          title: "Smart Recording",
          description: "Automated logging system simplifies patient tracking.",
        },
      ],
    },
    {
      image: carousel2,
      title: "High-Resolution Ultrasound",
      description:
        "Experience advanced imaging with our next-generation ultrasound system, built for precision and clarity.",
      features: [
        {
          icon: <ShieldCheck size={20} />,
          title: "Precision Imaging",
          description: "Crystal-clear results for better diagnostics.",
        },
        {
          icon: <FlaskConical size={20} />,
          title: "User-Friendly",
          description: "Intuitive interface for daily hospital workflows.",
        },
        {
          icon: <RefreshCcw size={20} />,
          title: "Seamless Data Flow",
          description: "Smooth integration with hospital record systems.",
        },
      ],
    },
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <section className="w-full bg-gradient-to-br from-cyan-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {carouselData[currentSlide].title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {carouselData[currentSlide].description}
          </p>

          <div className="mt-8 space-y-6">
            {carouselData[currentSlide].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 text-white rounded-full shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Carousel */}
        <div className="relative flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={carouselData[currentSlide].image}
                alt="Medical Device"
                className="w-full h-full object-contain p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Progress Bar Indicator */}
          <div className="w-full mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 7, ease: "linear" }}
              className="h-full bg-cyan-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HematologySystem;
