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
      description: `Benefit from our extensive knowledge of Ethiopia’s healthcare ecosystem and a demonstrated track record of delivering innovative solutions to public and private hospitals.`,
    },
    {
      id: 2,
      number: "02",
      title: "Customized Healthcare Solutions",
      description: `Receive tailored support and resources meticulously designed to address the specific requirements of your institution, ensuring optimal operational efficiency and patient care.`,
    },
    {
      id: 3,
      number: "03",
      title: "Adherence to Global Standards",
      description: `Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.`,
    },
    {
      id: 4,
      number: "04",
      title: "Efficient Partnership Framework",
      description: `Access premium medical devices sourced from internationally renowned manufacturers, upheld to the highest standards of reliability and quality.`,
    },
    {
      id: 5,
      number: "05",
      title: "Commitment to Sustainable Impact",
      description: `Collaborate with us to advance healthcare excellence across Ethiopia, contributing to enhanced patient outcomes and a robust community health infrastructure.`,
    },
  ];

  return (
    <div className="relative my-10">
      <style>
        {`
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
            transition: all 0.3s ease;
          }

          .number-circle:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
          }

          .number-circle::before {
            content: '';
            position: absolute;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #06b6d4;
            opacity: 0.3;
          }

          .service-card {
            position: relative;
            background: white;
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }

          .service-card-content {
            position: relative;
            z-index: 1;
            transition: opacity 0.3s ease;
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
        `}
      </style>

      <div className="absolute inset-0 z-0"></div>

      <div className="p-4 bg-cyan-600 pt-28 h-[500px] md:h-[25rem] text-white relative z-10 text-center">
        <div className="m-auto flex flex-col justify-center md:w-[620px]">
          <h1 className="text-xl md:text-4xl uppercase font-bold poppins">
            WHY CHOOSE OUR PRODUCTS?
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 -mt-72 md:-mt-44 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                elementsRef.current[index] = el;
              }
            }}
            className="service-card bg-white shadow-md rounded-lg lg:h-[28rem] lg:w-[22.7rem] sm:w-[16rem] md:w-[18rem] mx-auto"
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