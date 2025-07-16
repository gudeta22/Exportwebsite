const Blogs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen">
      {/* Hero Section */}
      <header className="text-cyan-600 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 animate-fade-in">
          Koji Healthcare Solutions
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Delivering quality medical products to Ethiopia for enhanced healthcare solutions.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">
        {/* Section 1: What is Koji Healthcare Solutions */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            What is Koji Healthcare Solutions?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Koji Healthcare Solutions is a medical product import company in Ethiopia, dedicated to supplying high-quality medical equipment and supplies to healthcare facilities. Our mission is to enhance healthcare delivery by providing reliable and innovative products. Key offerings include:
          </p>
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Diagnostic Equipment:</strong> Importing advanced diagnostic tools such as blood analyzers and imaging systems to support accurate medical assessments.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Patient Monitoring Systems:</strong> Supplying state-of-the-art monitoring devices to track patient health metrics in real-time.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Medical Consumables:</strong> Providing essential supplies like syringes, bandages, and sterilization equipment to ensure safe and effective care.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Surgical Instruments:</strong> Importing precision tools to support surgical procedures and improve patient outcomes.
              </span>
            </li>
          </ul>
          <div className="mt-6 sm:mt-8 pl-4 sm:pl-6 border-l-4 border-cyan-600 bg-cyan-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium italic text-base sm:text-lg">
              ★ Koji Healthcare Solutions is committed to bridging the gap in Ethiopia’s healthcare system by supplying reliable, high-quality medical products.
            </p>
          </div>
        </section>

        {/* Section 2: Importance of Koji Healthcare Solutions */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            Why Koji Healthcare Solutions Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Access to quality medical products is vital for effective healthcare delivery in Ethiopia. Koji Healthcare Solutions plays a critical role in ensuring healthcare facilities are equipped with reliable tools and supplies. Here’s why our work is essential:
          </p>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
              <i className="fas fa-stethoscope text-teal-500 mr-3 mt-1"></i>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>Enhanced Diagnostics</strong><br />
                Our imported diagnostic equipment ensures accurate detection of conditions, enabling timely and effective treatment.
              </p>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
              <i className="fas fa-stethoscope text-teal-500 mr-3 mt-1"></i>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>Improved Patient Care</strong><br />
                High-quality monitoring systems and consumables support better patient outcomes in hospitals and clinics.
              </p>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
              <i className="fas fa-stethoscope text-teal-500 mr-3 mt-1"></i>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>Reliable Supply Chain</strong><br />
                Koji ensures a steady supply of medical products, reducing shortages and supporting consistent care delivery.
              </p>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
              <i className="fas fa-stethoscope text-teal-500 mr-3 mt-1"></i>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>Public Health Support</strong><br />
                Our products aid in managing public health challenges, such as disease outbreaks, by equipping facilities with essential tools.
              </p>
            </article>
          </div>
        </section>

        {/* Section 3: Challenges in Medical Product Imports */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            Challenges in Medical Product Imports
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Importing medical products to Ethiopia presents unique challenges that Koji Healthcare Solutions strives to overcome. These include:
          </p>
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Regulatory Compliance:</strong> Navigating Ethiopia’s import regulations and ensuring compliance with international quality standards.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Logistics and Distribution:</strong> Managing complex supply chains to ensure timely delivery to healthcare facilities across Ethiopia.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Cost Management:</strong> Balancing affordability with the high costs of importing advanced medical equipment.
              </span>
            </li>
            <li className="flex items-start transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Training and Support:</strong> Providing adequate training for healthcare professionals to effectively use imported equipment.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4: Innovations */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            Innovations Powering Koji Healthcare Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Koji Healthcare Solutions stays ahead by sourcing innovative medical products that meet Ethiopia’s healthcare needs. Key innovations include:
          </p>
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start hover:text-teal-600 transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Advanced Diagnostic Tools:</strong> Importing cutting-edge blood analyzers and imaging systems for precise diagnostics.
              </span>
            </li>
            <li className="flex items-start hover:text-teal-600 transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Portable Medical Devices:</strong> Sourcing compact, portable equipment to support healthcare delivery in remote areas.
              </span>
            </li>
            <li className="flex items-start hover:text-teal-600 transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Efficient Supply Chain Systems:</strong> Leveraging technology to streamline importation and distribution processes.
              </span>
            </li>
            <li className="flex items-start hover:text-teal-600 transition-colors">
              <i className="fas fa-plus text-teal-500 mr-3 mt-1"></i>
              <span>
                <strong>Quality Assurance:</strong> Partnering with trusted global manufacturers to ensure all products meet rigorous quality standards.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 5: The Future */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            The Future of Koji Healthcare Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Koji Healthcare Solutions is committed to advancing Ethiopia’s healthcare system by expanding access to innovative medical products. Future trends, such as telemedicine integration and locally adapted medical technologies, will further enhance our ability to meet the evolving needs of healthcare providers and patients.
          </p>
        </section>

        {/* Section 6: Conclusion */}
        <section className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Koji Healthcare Solutions is transforming Ethiopia’s healthcare landscape by providing high-quality medical products that enhance diagnostics, patient care, and public health. By addressing challenges like regulatory compliance and logistics, Koji ensures reliable access to essential tools. With a focus on innovation and quality, Koji is shaping a healthier future for Ethiopia. Explore Koji Healthcare Solutions today to discover our commitment to better healthcare delivery.
          </p>
        </section>
      </main>

      {/* Inline Styles for Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        ul {
          list-style: none;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
