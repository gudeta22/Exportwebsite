import { useState } from 'react';
import aboutimg from '../assets/images/products/about-image.jpg';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MissionVision = () => {
  // ✅ Set default tab to "mission"
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-3xl lg:text-4xl fontstyle text-gray-700">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Koji Healthcare Solutions Pvt. Ltd., we are dedicated to transforming healthcare in Ethiopia
            by delivering exceptional medical devices and services of unparalleled excellence.
            Fueled by a relentless commitment to innovation and precision, we empower public and private
            healthcare providers to elevate patient care, fostering vibrant health and hope for every community we serve.
          </p>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 relative">
            <button
              onClick={() => setActiveTab('mission')}
              className={`relative pb-2 px-4 text-sm font-medium transition-colors ${
                activeTab === 'mission'
                  ? 'text-cyan-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Our Mission
              {activeTab === 'mission' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] bg-cyan-600 rounded-full"
                  style={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`relative pb-2 px-4 text-sm font-medium transition-colors ${
                activeTab === 'vision'
                  ? 'text-cyan-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Our Vision
              {activeTab === 'vision' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] bg-cyan-600 rounded-full"
                  style={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Description Box */}
          <div className="relative mt-6 rounded-lg shadow-sm min-h-[100px] overflow-hidden">
            {/* Base white background */}
            <div className="absolute inset-0 bg-white"></div>

            {/* Cyan overlay only when a tab is active */}
            <AnimatePresence mode="wait">
              {activeTab && (
                <motion.div
                  key={activeTab}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-cyan-600"
                />
              )}
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 p-6"
                >
                  <p className="text-white font-medium">
                    To be Ethiopia’s premier provider of advanced medical devices,
                    ensuring public and private hospitals deliver world-class care with accessible,
                    innovative technology for a healthier future.
                  </p>
                </motion.div>
              )}
              {activeTab === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 p-6"
                >
                  <p className="text-white font-medium">
                    To revolutionize healthcare by providing innovative and reliable
                    solutions that enhance patient care and support healthcare
                    professionals worldwide.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* More About Us Button */}
          <button
            onClick={() => navigate('/ourcompany')}
            className="
              inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium
              hover:bg-cyan-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(14,165,233,0.6)]
              transition-all duration-500 ease-in-out mt-4
            "
          >
            More About Us
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 
                         transition-transform duration-500 group-hover:scale-105 rounded-xl"
            ></div>
            <img
              src={aboutimg}
              alt="Healthcare Professional"
              className="relative w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
