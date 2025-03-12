import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTelegramPlane, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'OurCompany', path: '/ourcompany' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${isScrolled ? 'bg-cyan-700 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* <img src="" alt="logo" className="h-16 w-16 object-contain rounded-full" /> */}
          <h2>Logo</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          {menuItems.map((item) => (
            <li key={item.name} className="hover:text-gray-300 transition duration-300">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
          </button>
        </div>
      </div>
              
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div className="fixed top-0 left-0 w-full h-screen bg-cyan-700 text-white flex flex-col items-start justify-start space-y-6 z-40 p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className='border border-amber-50 w-screen -mx-10 my-5 p-5 '>
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-3 right-4 text-white text-3xl">
              <FaTimes />
            </button>
          </div>
          
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold ">
              {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col items-center mt-4 space-y-4 w-full">
            <Link to="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-white py-2 rounded text-black font-bold">CONTACT</button>
            </Link>
            <div className="flex space-x-4">
              {[FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone, FaTelegramPlane].map((Icon, index) => (
                <Icon key={index} size={28} className="text-white" />
              ))}
            </div>
            <Link to="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-white py-2 rounded text-black font-bold">BOOK A MEETING</button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;