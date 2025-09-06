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
  const title = "REASONS TO WORK WITH US?";

  return (
    <>
      <style>{`
        .card-hover {
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          min-height: 250px;
          border-bottom: 2px solid #0e7490;
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
          );
          opacity: 0;
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1), opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          transform: scaleX(1.3) skewX(-8deg);
          z-index: 0;
        }
        .card-hover:hover::before {
          left: 0;
          opacity: 1;
          transform: scaleX(1) skewX(0deg);
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
          );
          transition: left 0.6s cubic-bezier(0.4, 0.8, 0.2, 1) 0.15s;
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
          background: transparent;
        }
        .card-hover .icon {
          font-size: 2rem;
          color: #d32f2f;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }
        .card-hover h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
          transition: color 0.3s ease;
        }
        .card-hover p {
          font-size: 0.9rem;
          color: #666;
          transition: color 0.3s ease;
        }
        .card-hover:hover .icon,
        .card-hover:hover h3,
        .card-hover:hover p {
          color: #fff;
        }
        .title-line {
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 15%;
          height: 2px;
          background: #0e7490;
        }
      `}</style>
      <section className="bg-gray-50 py-16 flex justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex mb-12 relative">
            <div className="text-left">
              <h2 className="text-3xl md:text-3xl font-semibold text-cyan-600 mb-2">
                {title}
              </h2>
              <div className="title-line"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectionsData.map((section, index) => (
              <div
                key={index}
                className="card-hover"
              >
                <div className="icon">{section.icon}</div>
                <h3>{section.heading}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWorkWithUs;