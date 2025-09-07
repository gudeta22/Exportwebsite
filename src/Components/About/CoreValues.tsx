import { CheckCircleIcon, UserGroupIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';

const CoreValues = () => {
  const values = [
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
      title: 'Ethical Standards',
      description:
        'We prioritize honesty, transparency, and ethical conduct in every decision and interaction.',
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-white" />,
      title: 'Patient-Focused',
      description:
        'Our approach is centered around supporting healthcare providers and improving patient care outcomes.',
    },
    {
      icon: <TrophyIcon className="h-6 w-6 text-white" />,
      title: 'Commitment to Quality',
      description:
        'We strive to deliver top-tier products and services that meet the highest industry standards.',
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-white" />,
      title: 'Community Care',
      description:
        'We actively contribute to the wellbeing of the communities we serve through responsible initiatives.',
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
      title: 'Dependability',
      description:
        'We build trust by consistently delivering reliable solutions and fostering strong relationships with partners and clients.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex mb-6 justify-start">
          <div className="text-center relative">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-2">
              OUR GUIDING PRINCIPLES
            </h2>
            <div className="absolute left-0  w-1/2 h-1 bg-cyan-600 transform -translate-y-1/2"></div>
          </div>
        </div>
        <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                ${index % 3 !== 2 ? 'lg:border-r lg:border-cyan-600' : ''}
                ${index % 3 !== 2 ? 'lg:pr-4' : ''}
                ${index < values.length - (values.length % 3 || 3) ? 'pb-4' : ''}
              `}
            >
              <div className="mb-4 rounded-full p-4 bg-cyan-600 text-white">
                {value.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 uppercase">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
