// src/ExpertiseSection.js

const OurExperties = () => {
  const expertiseData = [
    {
      icon: '🌍',
      title: 'UNMATCHED PRODUCT SOURCING',
      description:
        'Our team of experts sources only the finest medical products, including premium devices, advanced sutures, innovative implants, essential disposables, and diagnostic equipment.',
    },
    {
      icon: '📋',
      title: 'IN-DEPTH MARKET RESEARCH',
      description:
        'Our dedicated experts conduct market research to uncover trends and opportunities in the pharmaceutical sector, helping you stay ahead.',
    },
    {
      icon: '🚢',
      title: 'LIGHTNING-FAST SHIPPING',
      description:
        'We prioritize speed and reliability, ensuring that your orders are shipped efficiently and arrive when you need them the most.',
    },
    {
      icon: '💸',
      title: 'UNBEATABLE VALUE',
      description:
        'We believe in offering unparalleled value to our customers through highly competitive pricing without compromising quality.',
    },
    {
      icon: '🌐',
      title: 'MARKET ACCESS',
      description:
        'Our deep expertise in regulatory processes and industry networks helps customers gain seamless access to emerging global markets.',
    },
  ];

  return (
    <div className="py-20 bg-white h-screen">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-thin text-center text-black mb-8">
        OUR EXPERTISE LIES IN
      </h2>

      {/* Expertise Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 bg-cyan-600 text-white rounded-lg shadow-lg h-72 overflow-hidden transition-all duration-300 hover:bg-cyan-700 hover:scale-105 ${
              index > 2 ? 'md:col-span-1 md:col-start-1 md:ml-auto md:mr-auto' : ''
            } ${index === 4 ? 'md:col-start-2' : ''}`}
          >
            {/* Particle Background for Each Card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="particle absolute bg-white rounded-full opacity-30"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 4 + 2}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 1.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-4xl mb-4 bg-white w-12 h-12 flex items-center justify-center rounded-md">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              {/* Description */}
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Particles
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(${Math.random() * 8 - 4}px);
          }
        }
        .particle {
          will-change: transform;
        }
      `}</style> */}
    </div>
  );
};

export default OurExperties;