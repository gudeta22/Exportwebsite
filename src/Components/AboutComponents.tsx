import { useState } from 'react';
import aboutimg from '../assets/images/about-imgnew.png';
import { useNavigate } from 'react-router-dom';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');
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
            At Koji Healthcare Solutions Pvt. Ltd., we deliver premium healthcare products 
            and services with unmatched quality. Our passion drives us to empower healthcare 
            providers and enhance patient outcomes through precision and innovation.
          </p>
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              className={`pb-2 px-4 text-sm font-medium transition-colors ${
                activeTab === 'mission'
                  ? 'border-b-2 border-cyan-600 text-cyan-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button
              className={`pb-2 px-4 text-sm font-medium transition-colors ${
                activeTab === 'vision'
                  ? 'border-b-2 border-cyan-600 text-cyan-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            {activeTab === 'mission' && (
              <p className="text-gray-700">
                Empowering Healthcare Through Quality, Access, Convenience, and 
                Fulfillment Every Step of The Way.
              </p>
            )}
            {activeTab === 'vision' && (
              <p className="text-gray-700">
                To revolutionize healthcare by providing innovative and reliable 
                solutions that enhance patient care and support healthcare 
                professionals worldwide.
              </p>
            )}
          </div>

          <button
      onClick={() => navigate('/ourcompany')} // Add this onClick
      className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium 
        hover:bg-cyan-700 transition-colors duration-200"
    >
      More About Us
    </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 
              transition-transform duration-500 group-hover:scale-105 rounded-xl"></div>
            <img
              src={aboutimg}
              alt="Healthcare Professional"
              className="relative w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;