const SupportSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-cyan-50 to-white py-6 md:py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 Q50,50 100,0 T200,100 L0,100 Z" fill="#06b6d4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-cyan-700 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section: Interactive Support Portal */}
            <div className="flex-1 p-6 sm:p-8 text-white relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 animate-pulse">
                YOUR SUPPORT HUB
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                Embark on a journey with our expert navigators! Whether you're
                crafting a cutting-edge lab or enhancing your tech arsenal,
                we’ll illuminate the perfect path to your solutions.
              </p>

              {/* Interactive Contact Options */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:flex md:space-x-4">
                {[
                  { icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", label: "Email" },
                  { icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z", label: "Call" },
                  { icon: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z", label: "Chat" },
                  { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z", label: "Live" },
                  { icon: "M21 6h-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4-2v2H7V4h10zm-3 12h-4v-2h4v2zm0-4h-4V8h4v4z", label: "FAQ" }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="group bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                    <span className="text-xs sm:text-sm mt-1 text-white group-hover:font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section: Dynamic Visual */}
            <div className="flex-1 relative h-56 sm:h-64 lg:h-auto w-full lg:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-cyan-500 transform skew-y-6"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white animate-bounce-slow">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold">We’ve Got You Covered!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-cyan-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-cyan-700 transition-colors">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2a2 2 0 012-2h10a2 2 0 012 2v2h-4m-6 0h6" />
        </svg>
      </button> */}
    </div>
  );
};

export default SupportSection;