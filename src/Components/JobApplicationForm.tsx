import { Link } from 'react-router-dom'; // Import Link for routing

const JobApplication = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-10 p-8 bg-white rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
        
        {/* Left Section - Decorative & Header */}
        <div className="flex-1 text-center lg:text-left">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-300 rounded-full opacity-20 animate-ping"></div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 animate-fade-in">
              Shape the Future
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Passionate about healthcare innovation? Join us and turn your ideas into impact!
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Curious about the role? Dive into the{' '}
            <a
              href="/careers" // Replace with your actual Google Doc URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-medium hover:text-teal-800 hover:underline transition-colors duration-300"
            >
              full job description
            </a>.
          </p>
        </div>

        {/* Right Section - Call to Action */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <Link
              to="/careers" // Routes to the /careers page
              className="relative bg-cyan-600 lg:hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 text-xl tracking-wide"
            >
              Join Our Mission
            </Link>
          </div>
          <p className="text-sm text-gray-600 italic animate-slide-up">
            Opportunities await—take the leap today!
          </p>
        </div>
      </div>
    </div>
  );
};

// TailwindCSS custom animations (add these to your tailwind.config.js or CSS file)
// Add the following animations to your TailwindCSS configuration instead of declaring them in the component file.

export default JobApplication;