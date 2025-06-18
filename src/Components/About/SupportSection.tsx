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
                {/* Email */}
                <a
                  href="mailto:contact@kojihealthcare.com"
                  className="group bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-xs sm:text-sm mt-1 text-white group-hover:font-bold">Email</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+251-923-657-040"
                  className="group bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="text-xs sm:text-sm mt-1 text-white group-hover:font-bold">Call</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/yourTelegramUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm mt-1 text-white group-hover:font-bold">Telegram</span>
                </a>
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
    </div>
  );
};

export default SupportSection;
