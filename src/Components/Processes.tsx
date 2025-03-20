import { useEffect, useState } from 'react';
import '../App.css'; // Importing App.css for custom styles

const StreamlinedProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Sourcing',
      description: 'We meticulously select top-tier medical products from trusted global suppliers, ensuring compliance with all regulatory standards from the outset.',
    },
    {
      number: '02',
      title: 'Quality Control',
      description: 'Our expert team rigorously inspects and tests each product, guaranteeing safety, effectiveness, and readiness for the next stage.',
    },
    {
      number: '03',
      title: 'Logistics',
      description: 'We optimize transportation from warehouses to destinations, ensuring secure, efficient, and cost-effective delivery every step of the way.',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'We deliver products on time and in pristine condition, offering exceptional customer support to complete the process seamlessly.',
    },
  ];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateLayout = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white rounded-xl">
      <h2 className="text-3xl font-light fontstyle text-black text-center mb-16 tracking-tight">
        OUR STREAMLINE PROCESSES
      </h2>
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Step Card */}
              <div className="bg-white rounded-xl  p-6 flex flex-col items-center w-full max-w-lg h-full transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="text-cyan-600 text-5xl font-bold mb-4 relative">
                  {step.number}
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-600 rounded-full"></span>
                </div>
                <h3 className="text-xl font-light fontstyle text-black mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center fontstyle flex-grow">{step.description}</p>
              </div>

              {/* Arrow between steps (hidden on mobile, not shown after the last step) */}
              {index < steps.length - 1 && isDesktop && (
                <svg
                  className="hidden md:block w-12 h-12 text-cyan-600 fontstyle flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id={`arrowGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5 12 H19 M19 12 L14 7 M19 12 L14 17"
                    stroke={`url(#arrowGradient-${index})`}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamlinedProcess;