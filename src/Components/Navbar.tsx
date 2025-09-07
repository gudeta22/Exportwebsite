import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import logo from '../assets/images/Logo-01-white.png';

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-white/20"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}

    <motion.div
      className="absolute bottom-0 left-0 w-full h-1/3 bg-cyan-700/30"
      animate={{
        clipPath: [
          'polygon(0 100%, 100% 100%, 100% 80%, 0% 60%)',
          'polygon(0 100%, 100% 100%, 100% 60%, 0% 80%)',
          'polygon(0 100%, 100% 100%, 100% 80%, 0% 60%)',
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'OurCompany', path: '/ourcompany' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? 'bg-cyan-700 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 max-w-xs sm:max-w-none">
          <img
            src={logo}
            alt="Koji Healthcare Solutions Logo"
            className="h-14 lg:h-16 sm:h-12 w-auto object-contain"
          />
        </Link>

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

        <div className="md:hidden text-2xl">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-screen bg-cyan-700 bg-opacity-95 backdrop-blur-sm text-white z-40 flex flex-col px-6 pt-8 pb-10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AnimatedBackground />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-5 text-white text-3xl hover:text-gray-300 transition"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col space-y-4 mt-14 relative z-10">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-bold text-white hover:text-cyan-400 transition duration-200 py-2 border-b border-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-6 relative z-10">
                <button className="w-full bg-gradient-to-r from-white to-white text-black font-bold py-3 rounded-lg transition duration-300">
                  CONTACT
                </button>
              </Link>

              <div className="flex justify-center items-center space-x-6 mt-6 relative z-10">
                {[FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone, FaTelegramPlane].map((Icon, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <Icon size={28} className="text-white hover:text-cyan-400 transition" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
