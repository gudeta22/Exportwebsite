
// Replace this with the actual image path in your project

const SupportSection = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-[22rem] items-center bg-cyan-600 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Text and Icons */}
        <div className="flex-1 p-8 text-white">
          <h2 className="text-3xl font-bold text-white mb-4">
            NOT SURE WHAT YOU NEED?
          </h2>
          <p className="text-lg mb-6">
            Our team of experts will help you find the right solutions. Whether
            you are setting up a new laboratory or upgrading your existing
            systems, we will guide you in selecting the best products for your
            needs.
          </p>
          {/* Icons */}
          <div className="flex space-x-4">
            <div className="bg-white rounded-full p-3">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 6h-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4-2v2H7V4h10zm-3 12h-4v-2h4v2zm0-4h-4V8h4v4z" />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Right Section: Image */}
        {/* <div className="flex-1">
          <img
            src={supportImage}
            alt="Support team member"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default SupportSection;