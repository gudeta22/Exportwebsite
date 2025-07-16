
// Example data for sections
const sectionsData = [
  {
    icon: <span>🌟</span>,
    heading: 'Mission-Driven Collaboration',
    content: 'Emphasize partnering with passionate professionals to revolutionize healthcare in Ethiopia by delivering premium endoscopy, X-ray, and urology medical devices to public and private hospitals.',
  },
  {
    icon: <span>💡</span>,
    heading: 'Diverse Opportunities',
    content: 'Highlight the inclusion of various roles (e.g., healthcare experts, logistics specialists, business innovators) to attract a wide range of talent and skills.',
  },
  {
    icon: <span>⏱️</span>,
    heading: 'Impactful Engagement',
    content: 'Promote the chance to drive innovation, access cutting-edge technology, and create a lasting impact on patient outcomes and medical communities.',
  },
  {
    icon: <span>🤝</span>,
    heading: 'Client-Centric Approach',
    content: 'We prioritize our clients’ needs and work closely with them to achieve their goals.',
  },
  {
    icon: <span>🌍</span>,
    heading: 'Global Reach',
    content: 'Our services are available worldwide, helping businesses scale and grow globally.',
  },
  {
    icon: <span>💼</span>,
    heading: 'Comprehensive Services',
    content: 'From strategy to execution, we offer end-to-end services to support your business.',
  },
];

// Main Component
const WhyWorkWithUs = () => {
  const title = "WHY WORK WITH US?";

  return (
    <>
      <style>{`
        .card-hover {
          position: relative;
          overflow: hidden;
        }
        .card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(8, 145, 178, 0.3) 20%,
            rgba(8, 145, 178, 0.7) 50%,
            rgba(8, 145, 178, 0.3) 80%,
            transparent 100%
          ); /* Dynamic ripple gradient */
          opacity: 0;
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1), opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          transform: scaleX(1.3) skewX(-8deg); /* Enhanced wave-like flow */
          z-index: 0;
        }
        .card-hover:hover::before {
          left: 0;
          opacity: 1;
          transform: scaleX(1) skewX(0deg); /* Smooth out on hover */
        }
        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(8, 145, 178, 0.9),
            rgba(8, 145, 178, 1),
            rgba(8, 145, 178, 0.9)
          ); /* Solid fill with subtle sheen */
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1) 0.15s; /* Delayed fill for layered effect */
          z-index: 0;
        }
        .card-hover:hover::after {
          left: 0;
        }
        .card-hover > * {
          position: relative;
          z-index: 1;
        }
        .card-hover:hover {
          background: transparent; /* Ensure base background doesn't interfere */
        }
      `}</style>
      <section className="bg-gray-50 py-16 flex justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex mb-12">
            <div className="text-left relative">
              <h2 className="text-3xl md:text-3xl font-semibold text-cyan-600 mb-2">
                {title}
              </h2>
              <div className="absolute left-0 w-1/2 h-1 bg-cyan-600 transform -translate-y-1/2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionsData.map((section, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-100 rounded-xl shadow-md border border-gray-200 hover:text-white hover:shadow-xl hover:-translate-y-2 transform transition-all duration-600 ease-out text-center min-h-[300px] card-hover"
              >
                <div className="text-4xl w-fit rounded-xl p-5 mb-4 flex justify-center items-center mx-auto group-hover:shadow-md transition-all duration-600 ease-out">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-600 ease-out">
                  {section.heading}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-600 ease-out">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWorkWithUs;