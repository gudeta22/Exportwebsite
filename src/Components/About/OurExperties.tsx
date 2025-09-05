import { MdPublic, MdAssignment, MdLocalShipping, MdAttachMoney, MdMap } from 'react-icons/md';

const OurExperties = () => {
  const expertiseData = [
    {
      icon: <MdPublic size={24} />,
      title: 'UNMATCHED PRODUCT SOURCING',
      description:
        'Our team of experts sources only the finest medical products, including premium devices, advanced sutures, innovative implants, essential disposables, and diagnostic equipment.',
    },
    {
      icon: <MdAssignment size={24} />,
      title: 'IN-DEPTH MARKET RESEARCH',
      description:
        'Our dedicated experts conduct market research to uncover trends and opportunities in the pharmaceutical sector, helping you stay ahead.',
    },
    {
      icon: <MdLocalShipping size={24} />,
      title: 'LIGHTNING-FAST SHIPPING',
      description:
        'We prioritize speed and reliability, ensuring that your orders are shipped efficiently and arrive when you need them the most.',
    },
    {
      icon: <MdAttachMoney size={24} />,
      title: 'UNBEATABLE VALUE',
      description:
        'We believe in offering unparalleled value to our customers through highly competitive pricing without compromising quality.',
    },
    {
      icon: <MdMap size={24} />,
      title: 'MARKET ACCESS',
      description:
        'Our deep expertise in regulatory processes and industry networks helps customers gain seamless access to emerging global markets.',
    },
  ];

  return (
    <>
      <style>{`
        .card-hover {
          position: relative;
          overflow: hidden;
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
          ); /* Dynamic ripple gradient */
          opacity: 0;
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1), opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          transform: scaleX(1.3) skewX(-8deg); /* Wave-like flow */
          z-index: 0;
        }
        .card-hover:hover::before,
        .card-hover:active::before {
          left: 0;
          opacity: 1;
          transform: scaleX(1) skewX(0deg); /* Smooth out on hover/tap */
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
          ); /* Solid fill with subtle sheen */
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1) 0.15s; /* Delayed fill for layered effect */
          z-index: 0;
        }
        .card-hover:hover::after,
        .card-hover:active::after {
          left: 0;
        }
        .card-hover > * {
          position: relative;
          z-index: 1;
        }
        .card-hover:hover,
        .card-hover:active {
          background: transparent; /* Prevent base background interference */
          transform: scale(1.05); /* Match existing hover scale */
        }
        @media (max-width: 768px) {
          .card-hover {
            transition: transform 0.6s ease-out; /* Ensure smooth scaling on mobile */
          }
          .card-hover:active {
            transform: scale(1.03); /* Slightly smaller scale for tap feedback */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Match hover:shadow-2xl */
          }
        }
      `}</style>
      <div className="py-20 bg-white">
        {/* Header section */}
        <div className="mb-8 max-w-7xl mx-auto px-4">
          <div className="text-left relative inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-2">
              OUR STRENGTH IS IN          </h2>
            <div className="h-1 bg-cyan-600 w-32"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg h-72 overflow-hidden transform transition-all duration-500 card-hover group ${
                index > 2 ? 'md:col-span-1 md:col-start-1 md:ml-auto md:mr-auto' : ''
              } ${index === 4 ? 'md:col-start-2' : ''}`}
            >
              <div className="z-10 flex flex-col items-start">
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