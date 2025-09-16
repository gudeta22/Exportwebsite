import plogo from '../assets/images/logo2.png'
import plogo2 from '../assets/images/logo3.png'

function Partnerwith() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            OUR PARTNERS
          </h2>
          <p className="text-black leading-relaxed">
         We work closely with trusted partners to deliver innovative solutions that meet the highest standards. Our relationships are driven by integrity, reliability, and a mutual dedication to achieving lasting success.
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
          <div className="w-px bg-cyan-600 h-12"></div>
          
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
