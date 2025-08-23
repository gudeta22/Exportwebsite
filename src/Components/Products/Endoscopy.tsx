import { useState, useEffect } from "react";

const Endoscopy = () => {
  // External image URLs
  const Endo2 = "https://www.edan.com/Uploads/20201117111341_638881.jpg"; // LX3
  const Endo3 = "https://www.edan.com/Uploads/20200729032528_697571.jpg"; // LX9
  const Endo4 = "https://www.edan.com/Uploads/20191105044533_600793.jpg"; // LX8
  const Endo5 = "https://www.edan.com/Uploads/20191105044557_007018.jpg"; // U2 (example placeholder, replace with real if needed)

  const [mainImage, setMainImage] = useState(Endo2);
  const [mainLabel, setMainLabel] = useState("Acclarix LX3");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Array of images with labels
  const images = [
    { src: Endo2, alt: "Endoscopy Side View", label: "Acclarix LX3" },
    { src: Endo3, alt: "Endoscopy Front View", label: "Acclarix LX9" },
    { src: Endo4, alt: "Endoscopy Control Panel", label: "Acclarix LX8" },
    { src: Endo5, alt: "Endoscopy Portable", label: "U2" },
  ] as const;

  // Open modal
  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle image change with preloading
  const handleImageChange = (src: string, label: string): void => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setMainImage(src);
      setMainLabel(label);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setMainImage(Endo2);
      setMainLabel("Acclarix LX3");
    };
  };

  // Reset loading when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Spinner
  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
      <div className="w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Section Title */}
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-3 sm:w-5 bg-cyan-500 h-24 sm:h-40 mr-2 sm:mr-4"></div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Ultrasound Systems<sup className="text-xs sm:text-sm">™</sup>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-2 leading-relaxed">
              Our Acclarix ultrasound series is designed to deliver high-quality imaging with precision and reliability.
              Each model supports efficient diagnostics and ensures patient safety.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row bg-white p-4 sm:p-6 rounded-b-lg shadow-md gap-4 sm:gap-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <img
            src={mainImage}
            className="w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg transition-opacity duration-300"
            alt={mainLabel}
            onError={(e) => (e.currentTarget.src = Endo2)}
          />
          <p className="mt-2 text-sm sm:text-base font-semibold text-gray-700">{mainLabel}</p>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6 mt-4 lg:mt-0">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800">
            Explore the Acclarix ultrasound family: portable, powerful, and designed to meet the needs of modern healthcare.
          </p>
          <button
            onClick={openModal}
            className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 w-full sm:w-auto text-sm sm:text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-all duration-500 ease-out"
          style={{ backdropFilter: "blur(10px)" }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Ultrasound System Details
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 text-xl sm:text-2xl md:text-3xl p-3 rounded-full"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 relative">
              {isLoading && <LoadingSpinner />}
              {/* Main image */}
              <div className="w-full md:w-2/3 flex flex-col items-center">
                <img
                  src={mainImage}
                  className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                  alt={mainLabel}
                />
                <p className="mt-2 text-base sm:text-lg font-semibold text-gray-800">{mainLabel}</p>
              </div>
              {/* Thumbnails */}
              <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap justify-center gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(image.src, image.label)}
                    className={`w-[90px] md:w-[100px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      mainImage === image.src
                        ? "border-cyan-500 shadow-md"
                        : "border-gray-300 hover:border-cyan-400"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[70px] object-cover"
                    />
                    <p className="text-[10px] sm:text-xs mt-1 text-center text-gray-700">{image.label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Endoscopy;
