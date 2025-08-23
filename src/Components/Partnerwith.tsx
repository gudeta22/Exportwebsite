import plogo from '../assets/images/logo1.png'
import plogo2 from '../assets/images/logo3.png'

function Partnerwith() {
  return (
    <section className="py-20 bg-cyan-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            OUR PARTNERS
          </h2>
          <p className="text-white leading-relaxed">
            We collaborate with industry-leading suppliers and clients to ensure the
            highest quality products and services. Our partnerships are built on trust
            and a shared commitment to excellence.
          </p>
        </div>

        {/* Right Partner Logos */}
        <div className="flex justify-center md:justify-end items-center gap-8">
          <img
            src={plogo}
            alt="Partner Logo 1"
            className="h-20 object-contain"
          />
          
          {/* White vertical line */}
          <div className="w-px bg-white h-12"></div>
          
          <img
            src={plogo2}
            alt="Partner Logo 2"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Partnerwith;
