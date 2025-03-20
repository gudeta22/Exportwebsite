import { motion } from 'framer-motion';
import logoUrl from '../../assets/images/Klogo.png'
// Placeholder for the logo (you can replace this with your actual logo image)

const AboutDescription = () => {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/white-diamond.png')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Logo Section */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative p-6 bg-cyan-600 rounded-full shadow-lg">
            <img
              src={logoUrl}
              alt="Z Healthcare Solutions Logo"
              className="lg:w-64 lg:h-64  w-40 h-40 object-contain"
            />
            <div className="absolute inset-0 rounded-full border-4 border-teal-300/50 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Who We Are</h3>
          <p className="text-gray-600">
            Founded on the principles of trust, innovation, and excellence, Koji Healthcare Solutions collaborates with globally recognized partners to bring state-of-the-art technology to the healthcare industry. Our commitment to quality and customer satisfaction drives everything we do, making us a preferred partner for laboratories, hospitals, and research institutions.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            At Koji Healthcare Solutions, we empower healthcare professionals by delivering quality, ensuring convenience, and striving for excellence. Our mission is to create a seamless, reliable healthcare journey, improving lives at every step through accessible, efficient, and exceptional care.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            Our vision is to support physicians with the finest medical resources they need to thrive, empowering healthcare to be better for everyone. By doing this, we aim to build healthier, stronger communities where quality care is accessible to all.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDescription;