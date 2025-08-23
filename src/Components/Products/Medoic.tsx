import { useState, useEffect } from 'react';

// ECG Images (remote URLs)
const ECG1 = "https://www.edan.com/Uploads/20221018051058_394949.jpg"; // SE-1200 Pro/SE-1201 Pro Series
const ECG2 = "https://www.edan.com/Uploads/20201114094024_612502.jpg"; // iSE Series
const ECG3 = "https://www.edan.com/Uploads/20201114092047_577358.jpg"; // SE-1202
const ECG4 = "https://www.edan.com/Uploads/20191104013229_303918.jpg"; // SE-18
const ECG5 = "https://www.edan.com/Uploads/20191104013938_538255.jpg"; // SE-12 Series
const ECG6 = "https://www.edan.com/Uploads/20191105093459_069522.jpg"; // SE-601 Series
const ECG7 = "https://www.edan.com/Uploads/20191105093459_069522.jpg"; // SE-301 Series
const ECG8 = "https://www.edan.com/Uploads/20191105093459_069522.jpg"; // SE-3/300
const ECG9 = "https://www.edan.com/Uploads/20191105093459_069522.jpg"; // SE-1515

const ECGComponent = () => {
  const [mainImage, setMainImage] = useState(ECG1);
  const [mainLabel, setMainLabel] = useState("SE-1200 Pro/SE-1201 Pro Series – 12-Channel ECG");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const images = [
    { src: ECG1, alt: "SE-1200 Pro/SE-1201 12-Channel ECG" },
    { src: ECG2, alt: "iSE Series – 12/18-lead ECG" },
    { src: ECG3, alt: "SE-1202 – 12-Lead ECG Workstation" },
    { src: ECG4, alt: "SE-18 – 18-Lead ECG Workstation" },
    { src: ECG5, alt: "SE-12 Series – 12-Channel ECG" },
    { src: ECG6, alt: "SE-601 Series – Multi-Channel ECG" },
    { src: ECG7, alt: "SE-301 Series – Portable Multi-Channel ECG" },
    { src: ECG8, alt: "SE-3/300 – 3-Channel ECG" },
    { src: ECG9, alt: "SE-1515 – ECG Workstation" },
  ] as const;

  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleImageChange = (src: string, alt: string): void => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setMainImage(src);
      setMainLabel(alt);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setMainImage(ECG1);
      setMainLabel("SE-1200 Pro/SE-1201 Pro Series – 12-Channel ECG");
    };
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
      <div className="w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-t-lg shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-3 sm:w-4 bg-cyan-500 h-24 sm:h-32 mr-2 rounded"></div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              ECG Machine<sup className="text-sm">™</sup>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2 leading-relaxed">
              Our ECG machines are designed for precise cardiac diagnostics with exceptional accuracy and reliability.
              They support efficient monitoring and ensure patient safety, making them essential tools for healthcare providers.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row bg-white p-6 rounded-b-lg shadow-md gap-6 transition-all duration-300">
        {/* Main image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <img
            src={mainImage}
            className="max-w-full h-auto object-contain rounded-lg shadow transition-opacity duration-300"
            alt={mainLabel}
            onError={(e) => (e.currentTarget.src = ECG1)}
          />
          <p className="mt-3 text-base sm:text-lg text-center text-gray-700 font-medium">
            {mainLabel}
          </p>
        </div>

        {/* Text + button */}
        <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0 flex flex-col justify-center">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Our state-of-the-art ECG machines provide accurate, real-time cardiac monitoring with user-friendly operation.
          </p>
          <button
            onClick={openModal}
            className="mt-6 px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 text-sm sm:text-base lg:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
          style={{ backdropFilter: "blur(10px)" }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                ECG Machine Details
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-2xl p-2 rounded-full"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Modal body */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              {isLoading && <LoadingSpinner />}

              {/* Sticky Large Image */}
              <div className="w-full md:w-2/3 flex flex-col items-center md:sticky md:top-0 self-start">
                <img
                  src={mainImage}
                  className="w-full max-h-[400px] object-contain rounded-lg shadow"
                  alt={mainLabel}
                />
                <p className="mt-3 text-sm sm:text-base text-gray-700 text-center font-medium">
                  {mainLabel}
                </p>
              </div>

              {/* Thumbnails */}
              <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap justify-center gap-4">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button
                      onClick={() => handleImageChange(image.src, image.alt)}
                      className={`w-[90px] sm:w-[110px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        mainImage === image.src
                          ? "border-cyan-500 shadow-md"
                          : "border-gray-300 hover:border-cyan-400"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[70px] sm:h-[80px] object-cover"
                      />
                    </button>
                    <p className="text-[11px] sm:text-xs text-center mt-2 text-gray-600">
                      {image.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECGComponent;
