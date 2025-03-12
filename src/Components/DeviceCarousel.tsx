import { useState, useEffect } from "react";
import { ShieldCheck, RefreshCcw, FlaskConical } from "lucide-react";
import machineImage1 from "../assets/images/home2.png";
import machineImage2 from "../assets/images/sterelizer.png";
import machineImage3 from "../assets/images/home2.png";

const HematologySystem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Carousel data
  const carouselData = [
    {
      image: machineImage1,
      description: "Medonic M32 3-diff hematology analyzer with advanced functions.",
      features: [
        { icon: <FlaskConical className="text-cyan-600" size={32} />, title: "Optimized Aspiration Quality", description: "Shear valve-guided aspiration ensures measurement quality." },
        { icon: <RefreshCcw className="text-cyan-600" size={32} />, title: "Automated Sample Mixing", description: "Optional space-saving automation solution provides constant mixing of queued samples." },
        { icon: <ShieldCheck className="text-cyan-600" size={32} />, title: "Reliable Equipment Design", description: "Robust equipment design helps ensure instrument uptime." },
      ],
    },
    {
      image: machineImage2,
      description: "Delivers CBC and 3-part WBC differential with exceptional accuracy.",
      features: [
        { icon: <ShieldCheck className="text-cyan-600" size={32} />, title: "Advanced Safety Features", description: "Ensures safe operation and minimizes risks." },
        { icon: <FlaskConical className="text-cyan-600" size={32} />, title: "Precision Testing", description: "Accurate results for critical diagnostics." },
        { icon: <RefreshCcw className="text-cyan-600" size={32} />, title: "Efficient Workflow", description: "Streamlined processes for faster turnaround." },
      ],
    },
    {
      image: machineImage3,
      description: "Robust design ensures instrument uptime and reliability.",
      features: [
        { icon: <RefreshCcw className="text-cyan-600" size={32} />, title: "Continuous Operation", description: "Designed for high-volume laboratories." },
        { icon: <ShieldCheck className="text-cyan-600" size={32} />, title: "Durable Construction", description: "Built to withstand demanding environments." },
        { icon: <FlaskConical className="text-cyan-600" size={32} />, title: "Advanced Diagnostics", description: "Comprehensive testing capabilities." },
      ],
    },
  ];

  // Auto-change slides every 5 seconds with smooth image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextSlide((prev) => (prev + 1) % carouselData.length);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        setIsTransitioning(false);
      }, 500); // Matches transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setNextSlide(index);

    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex max-w-7xl flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12 py-8 md:py-16 bg-white rounded-lg">
        
        {/* Image Section with Carousel */}
        <div className="relative flex flex-col items-center w-full md:w-[400px]">
          <div className="bg-cyan-600 p-6 md:p-8 rounded-lg relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/10 rounded-full" />

            {/* Active Image */}
            <img
              src={carouselData[currentSlide].image}
              alt="Hematology Machine"
              width={350}
              height={350}
              className={`absolute inset-0 rounded-lg object-cover transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Next Image (for smooth transition) */}
            <img
              src={carouselData[nextSlide].image}
              alt="Next Hematology Machine"
              width={350}
              height={350}
              className={`absolute inset-0 rounded-lg object-cover transition-opacity duration-500 ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <p className="mt-4 text-center text-gray-600 max-w-xs">
            {carouselData[currentSlide].description}
          </p>

          {/* Dot Navigation (Hidden on mobile, visible on larger screens) */}
          <div className="hidden md:flex space-x-2 mt-4">
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
         

          {/* Feature Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {carouselData[currentSlide].features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 md:p-6 border border-cyan-600 shadow-sm transition-transform duration-300 hover:scale-105 rounded-lg"
              >
                {feature.icon}
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation (Only visible on mobile) */}
          <div className="flex md:hidden justify-center space-x-2 mt-6">
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
      </div>
    </div>
  );
};

export default HematologySystem;