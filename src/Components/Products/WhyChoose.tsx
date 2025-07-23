import officeimage from '../../assets/images/koji_4.jpg';
import { useState } from 'react';

const WhyChoose = () => {
  const [open, setOpen] = useState<number | null>(null);

  const values = [
    { icon: '🤝', title: 'Proven Industry Expertise', description: 'Benefit from our extensive knowledge of Ethiopia’s healthcare ecosystem and a demonstrated track record of delivering innovative solutions to public and private hospitals.' },
    { icon: '💡', title: 'Customized Healthcare Solutions', description: 'Receive tailored support and resources meticulously designed to address the specific requirements of your institution, ensuring optimal operational efficiency and patient care.' },
    { icon: '💻', title: 'Adherence to Global Standards', description: 'Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.' },
    { icon: '👍', title: 'Efficient Partnership Framework', description: 'Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.' },
    { icon: '⭐', title: 'Commitment to Sustainable Impact', description: 'Collaborate with us to advance healthcare excellence across Ethiopia, contributing to enhanced patient outcomes and a robust community health infrastructure.' },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] bg-[#f1f4ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="relative inline-block">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-left text-cyan-600 mb-3">Why Choose Us</h2>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyan-600"></div>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mt-4 sm:mt-6 lg:mt-8 leading-relaxed max-w-3xl">
          Discover why we are the trusted partner for healthcare institutions across Ethiopia, delivering innovative solutions and unparalleled support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
        {/* Responsive Image with Background Effects */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 relative group cursor-pointer transition-all duration-300 aspect-[4/3] sm:aspect-[16/9]">
          {/* Top-left block */}
          <div className="absolute top-[-10px] left-[-10px] w-full h-full bg-cyan-600 rounded-lg z-0 transform transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          {/* Bottom-right block */}
          <div className="absolute bottom-[-10px] right-[-10px] w-full h-full bg-yellow-500 rounded-lg z-0 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          {/* Main Image */}
          <img
            src={officeimage}
            alt="Office environment showcasing healthcare solutions"
            className="relative z-10 w-full h-full lg:h-[25rem] rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Accordion */}
        <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 lg:space-y-5">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full p-3 sm:p-4 lg:p-5 flex items-center space-x-4 sm:space-x-6 focus:outline-none hover:bg-cyan-600 hover:text-white active:bg-cyan-600 active:text-white transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                onClick={() => setOpen(index === open ? null : index)}
                aria-expanded={open === index}
                aria-controls={`accordion-content-${index}`}
              >
                <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">{value.icon}</span>
                <h3 className="font-bold text-sm sm:text-base md:text-lg flex-1 text-left">{value.title}</h3>
                <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">{open === index ? '−' : '+'}</span>
              </button>
              <div
                id={`accordion-content-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  open === index ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                }`}
              >
                <div className="p-3 sm:p-4 lg:p-5">
                  <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
