import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://www.locallywedo.co.uk/assets/images/column/1609381893_get-in-touch.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch With Us!
          </h2>
          <Link
            to="/contact"
            className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-lg font-medium shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
