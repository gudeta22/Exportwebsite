import Xray from '../../assets/images/products/X-ray.jpeg';
// Placeholder imports for thumbnails (replace with actual images if available)
import Xray2 from '../../assets/images/products/Laparascopy.jpeg'; // Example
import Xray3 from '../../assets/images/products/OR.jpeg'; // Example
import Xray4 from '../../assets/images/products/X-ray.jpeg'; // Example
import Xray5 from '../../assets/images/products/ultrasound.jpeg'; // Example
import { useState } from 'react';

const XrayComponent = () => {
  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState(Xray);

  // Array of thumbnail images (replace srcs with actual image paths)
  const thumbnails = [
    { src: Xray, alt: 'X-ray Main View' },
    { src: Xray2, alt: 'X-ray Side View' },
    { src: Xray3, alt: 'X-ray Front View' },
    { src: Xray4, alt: 'X-ray Control Panel' },
    { src: Xray5, alt: 'X-ray Accessories' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Navigation Tabs with X-ray Text Section */}
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Vertical bar */}
          <div className="w-3 sm:w-5 bg-cyan-500 h-24 sm:h-40 mr-2 sm:mr-4"></div>
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              X-ray<sup className="text-xs sm:text-sm">™</sup>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-2 leading-relaxed">
              Our X-ray machine is designed for high-quality medical imaging with exceptional accuracy and reliability.< br /> It supports efficient diagnostics and ensures patient safety, making it an essential tool for medical facilities.<br />
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row bg-white p-4 sm:p-6 rounded-b-lg shadow-md gap-4 sm:gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-3 sm:gap-4">
          {/* Main Image */}
          <div className="w-full lg:w-3/4 bg-white rounded-lg flex items-center justify-center">
            <img
              src={mainImage}
              className="w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg"
              alt="X-ray Machine"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col flex-row flex-wrap justify-center gap-2 mt-3 lg:mt-0">
            {thumbnails.map((thumbnail, index) => (
              <button
                key={index}
                onClick={() => setMainImage(thumbnail.src)}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 ${
                  mainImage === thumbnail.src ? 'border-cyan-500' : 'border-gray-300'
                }`}
              >
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6 mt-4 lg:mt-0">
          <div className="text-gray-800">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Our state-of-the-art X-ray machine offers unparalleled imaging quality and precision. Designed with advanced technology, it ensures accurate diagnostics and enhanced patient care. With user-friendly features and robust performance, our X-ray machine is an essential tool for modern medical facilities.
            </p>
            <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 w-full sm:w-auto text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-4 sm:mt-6 bg-cyan-600 text-white p-3 sm:p-4 rounded-lg">
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li>High-resolution imaging: Delivers clear and detailed images for accurate diagnosis.</li>
              <li>Advanced safety features: Ensures patient and operator safety with minimal radiation exposure.</li>
              <li>Ergonomic design: Facilitates ease of use and patient comfort.</li>
              <li>Fast processing time: Provides quick results to enhance workflow efficiency.</li>
              <li>Durable construction: Built to withstand rigorous use in busy medical environments.</li>
              <li>Versatile applications: Suitable for a wide range of diagnostic procedures.</li>
              <li>Reliable performance: Consistently delivers high-quality images and dependable operation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XrayComponent;
