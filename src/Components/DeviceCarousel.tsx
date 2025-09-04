import { useState, useEffect, SetStateAction } from "react";
import { ShieldCheck, RefreshCcw, FlaskConical } from "lucide-react";
import carousel1 from "../assets/images/carouse-2.png";
import carousel2 from "../assets/images/carousel-1.png";

const HematologySystem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselData = [
    {
      image: carousel1,
      description:
        "ECG (Electrocardiogram) machine with 12 leads for comprehensive cardiac monitoring.",
      features: [
        {
          icon: <FlaskConical className="text-cyan-600" size={32} />,
          title: "Optimized Signal Quality",
          description:
            "High-precision electrodes ensure accurate and reliable ECG waveforms."
        },
        {
          icon: <RefreshCcw className="text-cyan-600" size={32} />,
          title: "Reliable Equipment Design",
          description:
            "Durable and robust design for consistent clinical performance.",
        },
        {
          icon: <ShieldCheck className="text-cyan-600" size={32} />,
          title: "Automated Data Recording",
          description: "Integrated digital system for continuous and automatic ECG recording.",
        },
      ],
    },
    {
      image: carousel2,
      description:
        "Delivers high-resolution imaging for accurate diagnosis with advanced ultrasound technology.",
      features: [
        {
          icon: <ShieldCheck className="text-cyan-600" size={32} />,
          title: "Optimized Signal Quality",
          description: "High-precision electrodes ensure accurate and reliable ECG waveforms.",
        },
        {
          icon: <FlaskConical className="text-cyan-600" size={32} />,
          title: "Reliable Equipment Design",
          description: "Accurate results for critical diagnostics.",
        },
        {
          icon: <RefreshCcw className="text-cyan-600" size={32} />,
          title: "Automated Data Recording",
          description: "Integrated digital system for continuous and automatic ECG recording.",
        },
      ],
    },
   
  ];

  // Carousel auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextSlide((prev) => (prev + 1) % carouselData.length);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const handleDotClick = (index: SetStateAction<number>) => {
    setIsTransitioning(true);
    setNextSlide(index);

    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex max-w-7xl flex-col md:flex-row items-center justify-center gap-8">

        {/* Image Section */}
        <div className="relative flex flex-col items-center w-full md:w-[400px]">
          <div className="bg-cyan-600 p-6 md:p-8 rounded-lg relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/10 rounded-full" />

            <img
              src={carouselData[currentSlide].image}
              alt="Hematology Machine"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={carouselData[nextSlide].image}
              alt="Next Hematology Machine"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <p className="mt-4 text-center text-gray-600 max-w-xs">
            {carouselData[currentSlide].description}
          </p>

          <div className="flex justify-center space-x-2 mt-4">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-cyan-600 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="flex-1 w-full">
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {carouselData[currentSlide].features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-cyan-600 shadow-sm transition-transform duration-300 hover:scale-105 rounded-lg"
              >
                {feature.icon}
                <div>
                  <h3 className="text-gray-800 font-extralight text-lg">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HematologySystem;
