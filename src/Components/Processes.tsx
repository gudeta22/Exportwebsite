import React from 'react';
import '../App.css';

const StreamlinedProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Needs Evaluation',
      description:
        'We collaborate closely with healthcare institutions to assess and understand their specific requirements.',
    },
    {
      number: '02',
      title: 'Global Procurement',
      description:
        'Source top-tier solutions from reputable international partners with meticulous attention to quality.',
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

  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="flex mb-16">
        <div className="text-start relative">
          <h2 className="text-3xl font-semibold text-cyan-600 capitalize mb-2">
            OUR STREAMLINE PROCESS          
            </h2>
          <div className="absolute left-0  w-1/2 h-1 bg-cyan-600 transform -translate-y-1/2"></div>
        </div>
      </div>

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