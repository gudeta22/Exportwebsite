// src/ExpertiseSection.js

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
    <div className="py-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-thin text-center text-black mb-8">
        OUR EXPERTISE LIES IN
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-cyan-600 text-white rounded-lg shadow-lg h-72 overflow-hidden ${
              index > 2 ? 'md:col-span-1 md:col-start-1 md:ml-auto md:mr-auto' : ''
            } ${index === 4 ? 'md:col-start-2' : ''}`}
          >
            <div className="z-10">
              <div className="text-4xl mb-4 bg-white text-black w-12 h-12 flex items-center justify-center rounded-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExperties;
