// CoreValues.tsx
import { CheckCircleIcon, UserGroupIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';

const CoreValues = () => {
  const values = [
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-cyan-500" />,
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and strong ethical principles in all our actions and decisions.',
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-cyan-500" />,
      title: 'Customer-Centricity',
      description: 'Putting the needs and satisfaction of customers at the heart of our business strategy.',
    },
    {
      icon: <TrophyIcon className="h-8 w-8 text-cyan-500" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in quality, service, and performance in all areas of our business.',
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-cyan-500" />,
      title: 'Social Responsibility',
      description: 'We’re committed to giving back to the community with respect and dependability.',
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-cyan-500" />,
      title: 'Trust',
      description: 'We’re committed to building and maintaining strong, reliable relationships with customers, partners, and employees based on mutual respect and dependability.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">CORE VALUES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;