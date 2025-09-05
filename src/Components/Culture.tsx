import { FaLightbulb, FaProjectDiagram } from "react-icons/fa";

export default function CultureSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-16 px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/81/21/10/360_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg')",
          
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Heading */}
        <div>
          <p className="text-white-500 text-2xl font-semibold uppercase tracking-wide mb-2">
            Our Culture
          </p>
          <h2 className="text-4xl font-bold">What We Think?</h2>
        </div>

        {/* Right side - Vision & Mission */}
        <div className="bg-white p-8 rounded-md shadow-md text-gray-900">
          {/* Vision */}
          <div className="flex items-start mb-6">
            <FaLightbulb className="text-cyan-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-cyan-600">Vision</h3>
              <p className="text-sm leading-relaxed">
                We envision a future where physicians have unparalleled resources to excel, delivering superior care to all. Our goal is to build healthier communities through accessible, high-quality healthcare.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start">
            <FaProjectDiagram className="text-cyan-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-cyan-600">Mission</h3>
              <p className="text-sm leading-relaxed">
               We strive to empower healthcare professionals with quality, convenience, and excellence. Our mission is to provide seamless, reliable care, enhancing lives through accessible and exceptional healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
