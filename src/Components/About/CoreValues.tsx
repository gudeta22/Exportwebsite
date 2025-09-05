import { CheckCircleIcon, UserGroupIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';

const CoreValues = () => {
  const values = [
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and strong ethical principles in all our actions and decisions.',
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-white" />,
      title: 'Customer-Centricity',
      description: 'Putting the needs and satisfaction of customers at the heart of our business strategy.',
    },
    {
      icon: <TrophyIcon className="h-6 w-6 text-white" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in quality, service, and performance in all areas of our business.',
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-white" />,
      title: 'Social Responsibility',
      description: "We're committed to giving back to the community with respect and dependability.",
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
      title: 'Trust',
      description: "We're committed to building and maintaining strong, reliable relationships with customers, partners, and employees based on mutual respect and dependability.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex mb-6 justify-start">
          <div className="text-center relative">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-2">
                  OUR GUIDING PRINCIPLES            </h2>
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
                ${index % 3 !== 2 ? 'lg:border-r lg:border-cyan-600' : ''} // Vertical line on the right, except for the last column
                ${index % 3 !== 2 ? 'lg:pr-4' : ''} // Padding to the right for items with a vertical line
                ${index < values.length - (values.length % 3 || 3) ? 'pb-4' : ''} // Padding to the bottom for items with a horizontal line
              `}
            >
              <div className="mb-4 bg-peach-200 rounded-full p-4 text-amber-50 bg-cyan-600">
                {value.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 uppercase">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;