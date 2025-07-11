import mission from '../../assets/images/close-up-team-health-workers.jpg';

const AboutDescription = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-7xl w-full">
        <div className="relative"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {/* WHO WE ARE */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1191656354/photo/business-people-are-analyzing-and-planning-business-business-strategy-consulting.jpg?s=612x612&w=0&k=20&c=s5NpCplr6_8Nbw3A4kon09W2Gqajnw96s5dI8Ss1hZ8="
                alt="Future Plans"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  {/* User Group Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-4h-1M9 20H4v-2a4 4 0 015-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-center text-teal-600 mt-10">WHO WE ARE</h2>
            <p className="text-center text-gray-600 mt-2">
              Koji Healthcare Solutions Pvt. Ltd. is a dynamic team of healthcare innovators and professionals committed to transforming Ethiopia’s medical landscape.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src={mission}
                alt="Our Mission"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  {/* Target Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0zm9 3a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-center text-teal-600 mt-10">OUR MISSION</h2>
            <p className="text-center text-gray-600 mt-2">
              We strive to empower healthcare professionals with quality, convenience, and excellence. Our mission is to provide seamless, reliable care, enhancing lives through accessible and exceptional healthcare solutions.
            </p>
          </div>

          {/* OUR VISION */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src="https://www.shutterstock.com/image-photo/business-achievement-objective-target-concept-600nw-2485552663.jpg"
                alt="Our Vision"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  {/* Eye Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-center text-teal-600 mt-10">OUR VISION</h2>
            <p className="text-center text-gray-600 mt-2">
              We envision a future where physicians have unparalleled resources to excel, delivering superior care to all. Our goal is to build healthier communities through accessible, high-quality healthcare.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
