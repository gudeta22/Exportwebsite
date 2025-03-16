
import { 
    FaCheckCircle,
    FaUsers,
    FaTrophy,
    FaHandshake,
    FaHandsHelping 
  } from 'react-icons/fa';
  
  const CoreValues = () => {
    const values = [
      {
        icon: <FaCheckCircle />,
        title: 'Integrity',
        description: 'Upholding honesty, transparency, and strong ethical principles in all our actions and decisions.',
      },
      {
        icon: <FaUsers />,
        title: 'Customer-Centricity',
        description: 'Putting the needs and satisfaction of customers at the heart of our business strategy.',
      },
      {
        icon: <FaTrophy />,
        title: 'Excellence',
        description: 'We strive for the highest standards in quality, service, and performance in all areas of our business.',
      },
      {
        icon: <FaHandshake />,
        title: 'Social Responsibility',
        description: 'We\'re committed to giving back to the community.',
      },
      {
        icon: <FaHandsHelping />,
        title: 'Trust',
        description: 'We are committed to building and maintaining strong, reliable relationships with customers, partners, and employees based on mutual respect and dependability.',
      },
    ];
  
    return (
      <div className=" bg-gradient-to-br from-gray-50 to-white md:-my-[1rem] lg:-my-[1rem] my-[35rem] ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-thin text-center text-gray mb-12 animate-fade-in">
            CORE VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg  transform"
              >
                <div className="text-4xl text-cyan-500  w-fit mb-4 animate-bounce-in">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  
  
  export default CoreValues;