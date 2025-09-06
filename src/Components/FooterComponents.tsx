import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from './BackToTop';
import logo from '../assets/images/Logo-01-white.png';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-cyan-700 text-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          {/* Responsive logo */}
          <img 
            src={logo} 
            alt="Koji Healthcare Logo"      
            className="h-12 md:h-16 lg:h-20 w-auto mb-4 object-contain" 
          />

          <p className="text-base mb-6 opacity-90 leading-relaxed">
            Koji Healthcare provides high-quality medical equipment and 
            healthcare solutions to hospitals, clinics, and laboratories. 
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl flex-wrap">
            <a href="mailto:contact@kojihealthcare.com" className="hover:text-cyan-100 transition-colors duration-300">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/company/107711159/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-100 transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-100 transition-colors duration-300">
              <FaWhatsapp />
            </a>
            <a href="tel:+251-923-657-040" className="hover:text-cyan-100 transition-colors duration-300">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Medical Devices */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Medical Devices</h3>
          <ul className="space-y-2 text-base">
            <li><Link to="/products/ecg" className="hover:text-cyan-100 transition-colors duration-300">ECG Machines</Link></li>
            <li><Link to="/products/ultrasound" className="hover:text-cyan-100 transition-colors duration-300">Ultrasound Systems</Link></li>
            <li><Link to="/products/xray" className="hover:text-cyan-100 transition-colors duration-300">X-Ray Machines</Link></li>
            <li><Link to="/products/lab-equipment" className="hover:text-cyan-100 transition-colors duration-300">Laboratory Equipment</Link></li>
            <li><Link to="/products/patient-monitors" className="hover:text-cyan-100 transition-colors duration-300">Patient Monitors</Link></li>
            <li><Link to="/products/surgical" className="hover:text-cyan-100 transition-colors duration-300">Surgical Instruments</Link></li>
          </ul>
        </div>

       {/* Customer Support */}
     <div>
  <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
  <ul className="space-y-2 text-base">
    <li><Link to="/faq" className="hover:text-cyan-100 transition-colors duration-300">FAQs</Link></li>
    <li><Link to="/warranty" className="hover:text-cyan-100 transition-colors duration-300">Warranty Information</Link></li>
    <li><Link to="/service-centers" className="hover:text-cyan-100 transition-colors duration-300">Service Centers</Link></li>
    <li><Link to="/request-quote" className="hover:text-cyan-100 transition-colors duration-300">Request a Quote</Link></li>
  </ul>
</div>


        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-base">
            <li><Link to="/ourcompany" className="hover:text-cyan-100 transition-colors duration-300">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-cyan-100 transition-colors duration-300">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-100 transition-colors duration-300">Contact Us</Link></li>
            <li><Link to="/products" className="hover:text-cyan-100 transition-colors duration-300">Our Products</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-cyan-500 py-6 text-center text-base text-white">
        <p>© {year} Koji Healthcare. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2 text-sm md:text-base flex-wrap">
          <Link to="/privacy-policy" className="hover:text-cyan-100 transition-colors duration-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-cyan-100 transition-colors duration-300">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-cyan-100 transition-colors duration-300">Cookies Settings</Link>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
};

export default Footer;
