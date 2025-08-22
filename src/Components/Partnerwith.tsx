import plogo from '../assets/images/Logo-01.png'

function Partnerwith() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OUR PARTNERS
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We collaborate with industry-leading suppliers and clients to ensure the
            highest quality products and services. Our partnerships are built on trust
            and a shared commitment to excellence.
          </p>
        </div>

        {/* Right Partner Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src={plogo} // replace with your actual path
            alt="Boule"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Partnerwith;
