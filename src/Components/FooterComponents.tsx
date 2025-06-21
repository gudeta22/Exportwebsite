// Social media icons (using FontAwesome placeholders; you'll need to install FontAwesome or use SVGs)
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LetsConnect = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section className="relative bg-cyan-700 text-white py-16">
      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Text and Contact Info */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Let's Collaborate!
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Ready to elevate your health solutions? We're just a click away!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="mailto:support@healthcare.com" className="text-sm md:text-base hover:underline">
              contact@kojihealthcare.com
            </a>
            <a href="tel:+251-923-657-040" className="text-sm md:text-base hover:underline">
              +251-923-657-040
            </a>
          </div>
        </div>

        {/* Right Side: Social Icons and Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end mt-8 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="mailto:contact@kojihealthcare.com" target='_blank' className="p-3 bg-white text-gray-900 rounded-full transition duration-300 hover:bg-yellow-500">
              <FaEnvelope size={20} />
            </a>
            <a href="https://www.linkedin.com/company/107711159/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-yellow-500 transition duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-yellow-500 transition duration-300">
              <FaWhatsapp size={20} />
            </a>
            <a href="tel:+251-923-657-040" className="p-3 bg-white text-gray-900 rounded-full hover:bg-yellow-500 transition duration-300">
              <FaPhone size={20} />
            </a>
            <a href="#" className="p-3 bg-white text-gray-900 rounded-full hover:bg-yellow-500 transition duration-300">
              <FaPaperPlane size={20} />
            </a>
          </div>

          {/* Book a Meeting Button */}
          <Link to="/contact" className="inline-block px-8 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg transform hover:scale-105">
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-0 w-full text-center py-4 bg-cyan-700 bg-opacity-30">
        <p className="text-sm opacity-70">
          © {year} Health Innovations Inc. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default LetsConnect;
