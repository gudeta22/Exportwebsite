import Xray from '../../assets/images/products/X-ray.jpeg';

const Medoic = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Navigation Tabs */}
      <div className="flex flex-col sm:flex-row justify-around bg-cyan-600 text-white p-2 rounded-t-lg">
        <button className="flex-1 text-center py-2">X-ray Machine</button>
        {/* <button className="flex-1 text-center py-2">CT Scanner</button> */}
        {/* <button className="flex-1 text-center py-2">MRI Machine</button> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row bg-white p-4 sm:p-6 rounded-b-lg shadow-md gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[24rem] h-auto bg-gray-200 rounded-lg flex items-center justify-center">
            <img 
              src={Xray} 
              className="w-full h-auto object-cover rounded-lg" 
              alt="X-ray Machine"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-6">
          <div className="text-gray-800">
            <p className="text-base sm:text-lg">
              Our state-of-the-art X-ray machine offers unparalleled imaging quality and precision. Designed with advanced technology, it ensures accurate diagnostics and enhanced patient care. With user-friendly features and robust performance, our X-ray machine is an essential tool for modern medical facilities.
            </p>
            <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-6 bg-cyan-600 text-white p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>High-resolution imaging: Delivers clear and detailed images for accurate diagnosis.</li>
              <li>Advanced safety features: Ensures patient and operator safety with minimal radiation exposure.</li>
              <li>Ergonomic design: Facilitates ease of use and patient comfort.</li>
              <li>Fast processing time: Provides quick results to enhance workflow efficiency.</li>
              <li>Durable construction: Built to withstand rigorous use in busy medical environments.</li>
              <li>Versatile applications: Suitable for a wide range of diagnostic procedures.</li>
              <li>Reliable performance: Consistently delivers high-quality images and dependable operation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medoic;