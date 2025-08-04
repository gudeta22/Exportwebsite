import { useState } from 'react';
import aboutimg from '../assets/images/products/about-image.jpg'; // Keep the original import for fallback
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl  text-gray-800 leading-snug">
            Our Commitment to Excellence
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At Koji Healthcare Solutions Pvt. Ltd., we are dedicated to transforming healthcare in Ethiopia
            by delivering exceptional medical devices and services of unparalleled excellence.
            Fueled by a relentless commitment to innovation and precision, we empower public and private
            healthcare providers to elevate patient care, fostering vibrant health and hope for every community we serve.
          </p>
             
          {/* Tabs */}
          <div className="flex flex-wrap gap-1">
            {['mission', 'vision'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'mission' | 'vision')}
                  className={`px-5 py-1.5 text-sm  font-medium transition-all duration-300 border 
                    ${isActive ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-cyan-50'}`}
                >
                  {tab === 'mission' ? 'Our Mission' : 'Our Vision'}
                </button>
              );
            })}
          </div>
        
          {/* Tab Content */}
          <div className="relative border border-gray-100 bg-gray-50 py-6  shadow-inner p-5 min-h-[100px]">
            <AnimatePresence mode="wait">
              {activeTab === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gray-700 text-lg">
                    To be Ethiopia’s premier provider of advanced medical devices,
                    ensuring public and private hospitals deliver world-class care with accessible,
                    innovative technology for a healthier future.
                  </p>
                </motion.div>
              )}
              {activeTab === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gray-700 text-xl">
                    To revolutionize healthcare by providing innovative and reliable
                    solutions that enhance patient care and support healthcare
                    professionals worldwide.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/ourcompany')}
            className="bg-cyan-600 hover:bg-cyan-700  text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all mt-3"
          >
            More About Us
          </button>
        </div>

        {/* Image Section */}
        <div className="relative rounded-xl overflow-hidden shadow-md w-full group">
          <img
            src={aboutimg}
            alt="Office Design"
            className="w-full h-[15rem] sm:h-[18rem] md:h-[22rem] lg:h-[28rem] object-cover rounded-xl"
            loading="lazy"
          />
          {/* Decorative Borders with Ease-Out Hover Effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-xl border-t-4 border-l-4 border-cyan-600 opacity-50 transition-opacity duration-300 ease-out group-hover:opacity-100" />
          <div className="absolute bottom-0 right-0 w-full h-full rounded-xl border-b-4 border-r-4 border-yellow-400 opacity-50 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;