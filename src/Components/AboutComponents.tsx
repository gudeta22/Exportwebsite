import aboutimg from '../assets/images/products/about-image.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const navigate = useNavigate();

  // Intersection observer to detect if stats are in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // States for counting numbers
  const [qualityProducts, setQualityProducts] = useState(0);
  const [qualifiedStaffs, setQualifiedStaffs] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animate counting up
      const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 50); // 50ms interval
        const counter = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(counter);
          }
          setter(Math.floor(start));
        }, 50);
      };

      animateCount(50, setQualityProducts);
      animateCount(10, setQualifiedStaffs);
    }
  }, [inView]);

  return (
    <section className="bg-[#f4fbfb] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Stats + Image */}
        <div className="flex flex-col gap-6" ref={ref}>
          
          {/* Stats Card */}
          <div className="bg-white shadow-md rounded-md p-6 flex justify-between text-center">
            <div>
              <h3 className="text-3xl font-bold text-cyan-600">
                {qualityProducts}
                <span className="text-cyan-600">+</span>
              </h3>
              <p className="text-sm text-cyan-600 font-medium">Quality Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-cyan-600">
                {qualifiedStaffs}
                <span className="text-cyan-600">+</span>
              </h3>
              <p className="text-sm text-cyan-600 font-medium">Qualified Staffs</p>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-md shadow-md"
          >
            <img
              src={aboutimg}
              alt="Company Building"
              className="w-full h-[18rem] md:h-[22rem] lg:h-[26rem] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Right Side - About Text */}
        <div className="space-y-6 lg:pt-28">
          <h2 className="text-xl font-bold text-cyan-600 uppercase tracking-wide">
            About Koji Healthcare Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Koji Healthcare Solutions Pvt. Ltd. was established with a strong vision 
            to transform healthcare in Ethiopia. With its headquarters in Addis Ababa 
            and expanding partnerships, Koji is committed to delivering advanced 
            medical devices and reliable solutions to hospitals and clinics nationwide.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We’re one of the leading importers and distributors of medical devices, 
            supporting healthcare providers with innovative and accessible technology 
            for over two decades.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ourcompany')}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-md font-medium shadow-md transition-all"
          >
            Discover More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
