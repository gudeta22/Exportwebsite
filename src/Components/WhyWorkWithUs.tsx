import React from 'react';

// Example data for sections
const sectionsData = [
  {
    icon: <span>🌟</span>, // Example icon as JSX.Element
    heading: 'Expert Team',
    content: 'Our team consists of highly skilled professionals with years of experience in their respective fields.',
  },
  {
    icon: <span>💡</span>, // Example icon as JSX.Element
    heading: 'Innovative Solutions',
    content: 'We provide cutting-edge solutions tailored to meet your unique business needs.',
  },
  {
    icon: <span>⏱️</span>, // Example icon as JSX.Element
    heading: 'Timely Delivery',
    content: 'We ensure that all projects are delivered on time without compromising on quality.',
  },
  {
    icon: <span>🤝</span>, // Example icon as JSX.Element
    heading: 'Client-Centric Approach',
    content: 'We prioritize our clients’ needs and work closely with them to achieve their goals.',
  },
  {
    icon: <span>🌍</span>, // Example icon as JSX.Element
    heading: 'Global Reach',
    content: 'Our services are available worldwide, helping businesses scale and grow globally.',
  },
  {
    icon: <span>💼</span>, // Example icon as JSX.Element
    heading: 'Comprehensive Services',
    content: 'From strategy to execution, we offer end-to-end services to support your business.',
  },
];

// Main Component
const WhyWorkWithUs: React.FC = () => {
  const title = "Why Work With Us?"; // Hardcoded title

  return (
    <section className="bg-gray-50 py-16 flex justify-center">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-thin text-start text-gray-800 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionsData.map((section, index) => (
            <div
              key={index}
              className="p-8 bg-cyan-600 rounded-lg shadow-md hover:shadow-lg border border-cyan-600 transition-shadow duration-300 text-center min-h-[300px]"
            >
              <div className="text-4xl bg-white w-fit rounded-xl p-5 mb-4 flex justify-center items-center mx-auto">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {section.heading}
              </h3>
              <p className="text-white">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;