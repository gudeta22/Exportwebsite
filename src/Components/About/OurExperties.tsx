import {
  MdMedicalServices,
  MdLocalShipping,
  MdSupportAgent,
  MdAttachMoney,
  MdHealthAndSafety,
} from 'react-icons/md';

const OurExperties = () => {
  const pillarsData = [
    {
      icon: <MdMedicalServices size={24} />,
      title: 'INNOVATIVE MEDICAL SOLUTIONS',
      description:
        'We deliver state-of-the-art medical and laboratory technologies that empower healthcare providers to improve diagnostics and patient care.',
    },
    {
      icon: <MdLocalShipping size={24} />,
      title: 'RELIABLE LOGISTICS',
      description:
        'Ensuring timely, safe, and efficient delivery of medical devices and equipment across Ethiopia, so hospitals and clinics can operate seamlessly.',
    },
    {
      icon: <MdSupportAgent size={24} />,
      title: 'CUSTOMIZED SUPPORT',
      description:
        'We collaborate with healthcare providers to offer tailored solutions that meet their specific needs, enhancing operational efficiency and patient outcomes.',
    },
    {
      icon: <MdAttachMoney size={24} />,
      title: 'COST-EFFECTIVE SOLUTIONS',
      description:
        'Providing high-quality healthcare products at competitive pricing to make advanced solutions accessible for public and private facilities.',
    },
    {
      icon: <MdHealthAndSafety size={24} />,
      title: 'COMMUNITY IMPACT',
      description:
        'By bridging global innovation with local demand, we strengthen healthcare services and support the wellbeing of communities across the country.',
    },
  ];

  return (
    <>
      <style>{`
        .card-hover {
          position: relative;
          overflow: hidden;
          z-index: 0; /* ensures pseudo-elements layer correctly */
        }

        .card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(8, 145, 178, 0.3) 20%,
            rgba(8, 145, 178, 0.7) 50%,
            rgba(8, 145, 178, 0.3) 80%,
            transparent 100%
          );
          opacity: 0;
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1), opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          transform: scaleX(1.3) skewX(-8deg);
          z-index: 1; /* pseudo-element layer */
        }

        .card-hover:hover::before,
        .card-hover:active::before {
          left: 0;
          opacity: 1;
          transform: scaleX(1) skewX(0deg);
        }

        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(8, 145, 178, 0.9),
            rgba(8, 145, 178, 1),
            rgba(8, 145, 178, 0.9)
          );
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1) 0.15s;
          z-index: 1;
        }

        .card-hover:hover::after,
        .card-hover:active::after {
          left: 0;
        }

        .card-hover > * {
          position: relative;
          z-index: 2; /* content above pseudo-elements */
        }

        .card-hover:hover,
        .card-hover:active {
          background: transparent;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .card-hover {
            transition: transform 0.6s ease-out;
          }
          .card-hover:active {
            transform: scale(1.03);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
      `}</style>

      <div className="py-20 bg-white">
        {/* Header */}
        <div className="mb-8 max-w-7xl mx-auto px-4">
          <div className="text-left relative inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-2">
              ADVANCING HEALTHCARE TOGETHER
            </h2>
            <div className="h-1 bg-cyan-600 w-32"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {pillarsData.map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg h-72 overflow-hidden transform transition-all duration-500 card-hover group ${
                index > 2 ? 'md:col-span-1 md:col-start-1 md:ml-auto md:mr-auto' : ''
              } ${index === 4 ? 'md:col-start-2' : ''}`}
            >
              <div className="flex flex-col items-start">
                <div className="text-4xl mb-4 bg-white text-black w-12 h-12 flex items-center justify-center rounded-md transition-colors duration-500 group-hover:bg-cyan-600 group-hover:text-white group-active:bg-cyan-600 group-active:text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-left transition-colors duration-500 group-hover:text-white group-active:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-left transition-colors duration-500 group-hover:text-white group-active:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurExperties;
