import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // For clean iconography

function Notfound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6 text-rose-600">
          <AlertCircle size={64} />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          We're here to guide you back to a healthier digital path.
        </p>
        <Link
          to="/"
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-cyan-700 transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
