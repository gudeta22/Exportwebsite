import { useState } from 'react';
import aboutimg from '../assets/images/doctor3.jpg';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-4">Our Commitment to Excellence</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            At X Healthcare Solutions Pvt. Ltd., we are dedicated to delivering premium
            healthcare products and services that set the standard for excellence in the industry.
            Our unwavering commitment to quality ensures that every product and service is crafted
            with precision and passion to empower healthcare providers and improve patient outcomes.
          </p>
          <div className="mt-10 flex sm:flex-row">
            <button
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-t-lg font-medium transition cursor-pointer ${activeTab === 'mission' ? 'bg-cyan-500 text-white' : 'bg-white'}`}
              onClick={() => setActiveTab('mission')}
            >
              OUR MISSION
            </button>
            <button
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-t-lg font-medium transition cursor-pointer ${activeTab === 'vision' ? 'bg-cyan-500 text-white' : 'bg-white'}`}
              onClick={() => setActiveTab('vision')}
            >
              OUR VISION
            </button>
          </div>
          <div className="bg-cyan-500 rounded-sm p-4 sm:p-6 mt-0">
            {activeTab === 'mission' && (
              <div className='text-white'>
                <p>
                  Empowering Healthcare Through Quality, Access, Convenience, and Fulfillment—Every Step of
                  The Way.
                </p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div className='text-white'>
                <p>
                  To revolutionize healthcare by providing innovative and reliable solutions that enhance
                  patient care and support healthcare professionals worldwide.
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-start mt-6">
            <button className="bg-cyan-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium shadow-md hover:bg-cyan-600 transition">
              MORE ABOUT US
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img
            src={aboutimg}
            alt="Healthcare Professional"
            className="w-full sm:w-3/4 md:w-full lg:h-[30rem] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
