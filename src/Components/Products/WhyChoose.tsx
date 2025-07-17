import { useEffect, useRef } from "react";

function WhyChoose() {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElements = elementsRef.current;

    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Proven Industry Expertise",
      description:
        "Benefit from our extensive knowledge of Ethiopia’s healthcare ecosystem and a demonstrated track record of delivering innovative solutions to public and private hospitals.",
    },
    {
      id: 2,
      number: "02",
      title: "Customized Healthcare Solutions",
      description:
        "Receive tailored support and resources meticulously designed to address the specific requirements of your institution, ensuring optimal operational efficiency and patient care.",
    },
    {
      id: 3,
      number: "03",
      title: "Adherence to Global Standards",
      description:
        "Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.",
    },
    {
      id: 4,
      number: "04",
      title: "Efficient Partnership Framework",
      description:
        "Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.",
    },
    {
      id: 5,
      number: "05",
      title: "Commitment to Sustainable Impact",
      description:
        "Collaborate with us to advance healthcare excellence across Ethiopia, contributing to enhanced patient outcomes and a robust community health infrastructure.",
    },
  ];

  return (
    <div className="relative my-10">
      <style>{`
        .number-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
          position: relative;
          transition: all 0.7s ease-in-out;
          z-index: 2;
        }
        .service-card {
          position: relative;
          background: #f3f4f6; /* gray-100 */
          color: #1f2937; /* gray-800 */
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.7s ease-in-out, box-shadow 0.7s ease-in-out;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: #06b6d4;
          z-index: 1;
          transition: width 0.7s ease-in-out;
        }
        .service-card:hover::before {
          width: 100%;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .service-card-content {
          position: relative;
          z-index: 2;
          transition: all 0.7s ease-in-out;
        }
        .service-card:hover .service-card-content h3,
        .service-card:hover .service-card-content p {
          color: #ffffff;
          transition: all 0.7s ease-in-out;
        }
        .service-card:hover .number-circle {
          background: #ffffff;
          color: #06b6d4;
          box-shadow: 0 0 10px rgba(255,255,255,0.4);
        }

        .slideUp {
          animation: slideUp 0.5s ease forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <div className="p-4 bg-cyan-600 pt-28 h-[500px] md:h-[25rem] text-white relative z-10 text-left">
        <div className="m-auto flex flex-col justify-center md:w-[620px]">
          <h1 className="text-xl md:text-4xl uppercase font-bold poppins inline-block">
            WHY CHOOSE OUR PRODUCTS?
          </h1>
          <div className="h-1 bg-white w-32 mt-2 rounded"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-5 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 -mt-72 md:-mt-44 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) elementsRef.current[index] = el;
            }}
            className="service-card lg:h-[27rem] lg:w-[22.7rem] sm:w-[16rem] md:w-[18rem] mx-auto"
          >
            <div className="service-card-content p-[20px] flex flex-col justify-center items-center gap-6 my-7">
              <div className="number-circle">{service.number}</div>
              <h3 className="font-semibold my-5 fontstyle text-center">{service.title}</h3>
              <p className="text-center poppins font-light text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;
