import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaTelegramPlane,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
// import logo from '../../src/assets/images/koji_logo-01__2_-removebg-preview.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'OurCompany', path: '/ourcompany' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];
// Effect to handle scroll event and change navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? 'bg-cyan-600 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-3 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex text-white gap-2 max-w-xs sm:max-w-none">
         
          {/* <img src={logo} className="text-sm sm:text-base my-2 font-semibold tracking-wide leading-tight" /> */}
        <span className='text-sm sm:text-base my-2 font-semibold tracking-wide leading-tight'>
          KOJI HEALTHCARE SOLUTIONS
        </span>  
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white text-base lg:text-lg">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-gray-300 transition duration-300 hover:underline hover:underline-offset-4"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-cyan-800 text-white z-40 flex flex-col px-6 pt-8 pb-10 space-y-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-5 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          {/* Logo */}
          <div className="flex flex-col leading-tight mt-2 mb-4">
            <span className="text-2xl font-extrabold">ኮጂ</span>
            <span className="text-sm tracking-wide">Healthcare Solutions</span>
          </div>

          {/* Menu Links */}
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold hover:underline hover:underline-offset-4 transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
            <button className="w-full bg-white text-black font-bold py-2 rounded-md mt-4">
              LET'S CONNECT
            </button>
          </Link>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            {[FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone, FaTelegramPlane].map((Icon, i) => (
              <Icon key={i} size={24} className="text-white hover:text-gray-300 transition" />
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;