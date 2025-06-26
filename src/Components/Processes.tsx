// import { useEffect, useState } from 'react';
import '../App.css';

const StreamlinedProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Needs Evaluation',
      description:
        'We Collaborate closely with healthcare institutions to assess and understand their specific requirements.',
    },
    {
      number: '02',
      title: 'Global Procurement',
      description:
        'Source top-tier solutions from reputable international partners with meticulous attention to quality.  ',
    },
    {
      number: '03',
      title: 'Seamless Distribution:',
      description:
        'Manage logistics, compliance, and delivery with precision to ensure timely and reliable access across Ethiopia.',
    },
    {
      number: '04',
      title: 'Delivery',
      description:
        'Our reliable distribution ensures timely delivery with full support and product integrity guaranteed.',
    },
  ];

  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // useEffect(() => {
  //   // const handleResize = () => setIsDesktop(window.innerWidth >= 768);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-thin text-start text-gray-800 mb-16">
        Our Streamlined Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            <div className="absolute -top-6 left-6 w-12 h-12 bg-cyan-600 text-white text-lg font-bold flex items-center justify-center rounded-full shadow-md">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pt-6">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StreamlinedProcess;
