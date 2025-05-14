import { motion } from 'framer-motion';
import logoUrl from '../../assets/images/Klogo.png';

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.4, ease: 'easeInOut' },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut', type: 'spring', stiffness: 100 },
  },
};

const AboutDescription = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-gray-100 py-16 sm:py-24 overflow-hidden">
      {/* Geometric Background Overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/3px-tile.png')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
        {/* Logo Section */}
        <motion.div
          className="flex-shrink-0"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative p-4 sm:p-6 bg-gradient-to-br mx-24 from-cyan-600 to-cyan-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border-4 border-teal-400/50 overflow-hidden">
            <img
              src={logoUrl}
              alt="Koji Healthcare Solutions Logo"
              className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain justify-center mx-auto"
            />
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-teal-300/30 animate-pulse" />
            <div className="absolute inset-0 bg-teal-200/10 rounded-xl sm:rounded-2xl" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 sm:gap-6">
            {['Who We Are', 'Our Mission', 'Our Vision'].map((title, index) => (
              <motion.div
                key={index}
                className="flex-1 min-w-[280px] p-6 sm:p-8 bg-white/95 rounded-md sm:rounded-lg shadow-md sm:shadow-xl transition-all duration-300 border-l-4 border-cyan-500"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl sm:text-3xl fontstyle font-thin text-gray-600 mb-2 sm:mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {title === 'Who We Are' && 'Koji Healthcare Solutions is founded on trust, innovation, and excellence. Partnering with global leaders, we deliver cutting-edge technology to laboratories, hospitals, and research institutions, driven by a passion for quality and customer satisfaction.'}
                  {title === 'Our Mission' && 'We strive to empower healthcare professionals with quality, convenience, and excellence. Our mission is to provide seamless, reliable care, enhancing lives through accessible and exceptional healthcare solutions.'}
                  {title === 'Our Vision' && 'We envision a future where physicians have unparalleled resources to excel, delivering superior care to all. Our goal is to build healthier communities through accessible, high-quality healthcare.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
