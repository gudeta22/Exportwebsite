import Endo2 from '../../assets/images/products/endoscopyview_1.jpg';
import Endo3 from '../../assets/images/products/endoscopyview_2.jpg';
import Endo4 from '../../assets/images/products/endoscopyview_3.jpg';
import { useState, useEffect } from 'react';

const Endoscopy = () => {
  const [mainImage, setMainImage] = useState(Endo2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Array of thumbnail images
  const images = [
    { src: Endo2, alt: 'Endoscopy Side View' },
    { src: Endo3, alt: 'Endoscopy Front View' },
    { src: Endo4, alt: 'Endoscopy Control Panel' },
  ] as const;

  // Open modal with loading state
  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle image change with preloading
  const handleImageChange = (src: typeof Endo2): void => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setMainImage(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setMainImage(Endo2); // Fallback to default image
    };
  };

  // Reset loading state when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10 transition-opacity duration-300">
      <div className="w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Navigation Tabs with Endoscopy Text Section */}
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-3 sm:w-5 bg-cyan-500 h-24 sm:h-40 mr-2 sm:mr-4"></div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Endoscopy<sup className="text-xs sm:text-sm">™</sup>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-2 leading-relaxed">
              Our Endoscopy system is designed for high-quality medical imaging with exceptional accuracy and reliability.<br />
              It supports efficient diagnostics and ensures patient safety, making it an essential tool for medical facilities.<br />
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row bg-white p-4 sm:p-6 rounded-b-lg shadow-md gap-4 sm:gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full bg-white rounded-lg flex items-center justify-center">
            <img
              src={mainImage}
              className="w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg transition-opacity duration-300"
              alt="Endoscopy System"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = Endo2)}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6 mt-4 lg:mt-0">
          <div className="text-gray-800">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Our state-of-the-art Endoscopy system offers unparalleled imaging quality and precision. Designed with advanced technology, it ensures accurate diagnostics and enhanced patient care. With user-friendly features and robust performance, our Endoscopy system is an essential tool for modern medical facilities.
            </p>
            <button
              onClick={openModal}
              className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 w-full sm:w-auto text-sm sm:text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Product Details and Images */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-all duration-500 ease-out ${
            isModalOpen ? 'opacity-92' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-5xl max-h-[90vh] overflow-y-auto transform transition-all duration-500 ease-out ${
              isModalOpen ? 'scale-100 opacity-95' : 'scale-90 opacity-0'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 id="modal-title" className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Endoscopy System Details
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 text-xl sm:text-2xl md:text-3xl p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 relative">
              {/* Loading Spinner */}
              {isLoading && <LoadingSpinner />}
              {/* Main Image Section in Modal */}
              <div className="w-full md:w-2/3">
                <img
                  src={mainImage}
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[400px] object-contain rounded-lg transition-opacity duration-500 ease-in-out"
                  alt="Endoscopy System Main View"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = Endo2)}
                />
              </div>
              {/* Thumbnails Section in Modal */}
              <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap justify-center gap-2 sm:gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(image.src)}
                    className={`w-[80px] sm:w-[90px] md:w-[100px] rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      mainImage === image.src ? 'border-cyan-500 shadow-md' : 'border-gray-300 hover:border-cyan-400 hover:shadow-sm'
                    }`}
                    aria-label={`Select ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[60px] sm:h-[70px] md:h-[90px] object-cover transition-transform duration-200 hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Features Section in Modal */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                Features
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>High-resolution imaging: Delivers clear and detailed images for accurate diagnosis.</li>
                <li>Advanced safety features: Ensures patient and operator safety with minimal risk.</li>
                <li>Ergonomic design: Facilitates ease of use and patient comfort.</li>
                <li>Fast processing time: Provides quick results to enhance workflow efficiency.</li>
                <li>Durable construction: Built to withstand rigorous use in busy medical environments.</li>
                <li>Versatile applications: Suitable for a wide range of diagnostic procedures.</li>
                <li>Reliable performance: Consistently delivers high-quality images and dependable operation.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Endoscopy;