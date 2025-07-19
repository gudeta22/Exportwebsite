// import mission from '../../assets/images/close-up-team-health-workers.jpg';

const AboutDescription = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-6 sm:py-8 md:py-10 lg:py-12 px-4">
      <div className="max-w-7xl w-full">
        <div className="flex mb-6 sm:mb-8 md:mb-10 justify-start">
          <div className="text-start relative">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-cyan-600 mb-2">
              ABOUT US
            </h2>
            <div className="absolute left-0 w-1/2 h-1 bg-cyan-600 transform -translate-y-1/2"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6">
          
          {/* WHO WE ARE */}
          <div className="bg-white p-3 sm:p-4 md:p-3 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1191656354/photo/business-people-are-analyzing-and-planning-business-business-strategy-consulting.jpg?s=612x612&w=0&k=20&c=s5NpCplr6_8Nbw3A4kon09W2Gqajnw96s5dI8Ss1hZ8="
                alt="Future Plans"
                loading='lazy'
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  {/* User Group Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-4h-1M9 20H4v-2a4 4 0 015-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-center text-teal-600 mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl">WHO WE ARE</h2>
            <p className="text-center text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
              Koji Healthcare Solutions Pvt. Ltd. is a dynamic team of healthcare innovators and professionals committed to transforming Ethiopia’s medical landscape.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="bg-white p-3 sm:p-4 md:p-3 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQEgPWb-CtA2Bg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692902984021?e=2147483647&v=beta&t=kkLyBYn2ami0MGlPZUnu0wLSiNmvzPjWTns7gQRndAo"
                alt="Our Mission"
                loading='lazy'
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  {/* Target Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0zm9 3a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-center text-teal-600 mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl">OUR MISSION</h2>
            <p className="text-center text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
              We strive to empower healthcare professionals with quality, convenience, and excellence. Our mission is to provide seamless, reliable care, enhancing lives through accessible and exceptional healthcare solutions.
            </p>
          </div>

          {/* OUR VISION */}
          <div className="bg-white p-3 sm:p-4 md:p-3 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src="https://www.shutterstock.com/image-photo/business-achievement-objective-target-concept-600nw-2485552663.jpg"
                alt="Our Vision"
                loading='lazy'
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg">
                <div className="bg-cyan-600 text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  {/* Eye Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-6 h-5 sm:h-6"
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
            <h2 className="text-center text-teal-600 mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl">OUR VISION</h2>
            <p className="text-center text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
              We envision a future where physicians have unparalleled resources to excel, delivering superior care to all. Our goal is to build healthier communities through accessible, high-quality healthcare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;