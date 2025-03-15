import { useEffect, useRef, useState } from "react";

function WhyChoose() {
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
      title: "Advanced Technology",
      description: `All our products are sourced from leading global manufacturers.`,
      fullDescription: `All our products are meticulously sourced from the world's most renowned and innovative global manufacturers, guaranteeing access to state-of-the-art technology and groundbreaking solutions that redefine excellence in modern healthcare. This ensures that every piece of equipment and tool we offer incorporates the latest advancements, delivering unparalleled precision, efficiency, and adaptability to meet the diverse and evolving needs of medical professionals and patients alike.`
    },
    {
      id: 2,
      number: "02",
      title: "Proven Reliability",
      description: `Trusted technology ensuring consistent and accurate medical care.`,
      fullDescription: `TOur trusted technology guarantees unwavering consistency and pinpoint accuracy in medical care, fortified by decades of rigorous scientific research and proven through extensive real-world implementation across premier medical facilities spanning the globe. This foundation ensures that our solutions deliver dependable performance, seamlessly supporting healthcare professionals in providing exceptional patient outcomes in diverse clinical settings.`
    },
    {
      id: 3,
      number: "03",
      title: "Comprehensive Support",
      description: `Complete assistance for seamless medical care and operations.`,
      fullDescription: `We provide comprehensive, end-to-end assistance to ensure seamless medical care and operational excellence, encompassing thorough hands-on training programs, meticulous preventative maintenance services, and round-the-clock, 24/7 customer support available for every single product in our portfolio. This holistic approach empowers healthcare teams with the knowledge, resources, and immediate assistance they need to maintain peak performance, minimize downtime, and deliver uninterrupted, high-quality patient care at all times.`
    },
  ];

  const toggleDescription = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="lg:bg-cover sm:bg-cover bg-cover md:bg-cover relative my-10">
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

          .service-card.expanded {
            height: auto;
            min-height: 28rem;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: none;
            opacity: 0;
            z-index: 0;
            transition: opacity 0.3s ease;
          }

          .service-card:hover::before {
            opacity: 0.3;
          }

          .service-card-content {
            position: relative;
            z-index: 1;
            transition: opacity 0.3s ease;
          }

          .description {
            max-height: 4rem;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .full-description-wrapper {
            display: none;
          }

          .full-description-wrapper.expanded {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.95);
            padding: 20px;
            z-index: 2;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background: #dc2626;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            transition: background 0.3s ease;
          }

          .close-btn:hover {
            background: #b91c1c;
          }

          .full-description {
            flex-grow: 1;
            display: flex;
            align-items: start;
            justify-content: start;
            text-align: start;
          }

          .more-details-btn {
            background: #a3e635;
            color: #1e3a8a;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 20px;
            transition: background 0.3s ease;
          }

          .more-details-btn:hover {
            background: #84cc16;
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

      <div className="p-4 service bg-cyan-600 pt-28 h-[500px] md:text-center md:h-[25rem] text-white relative z-10">
        <div className="md:m-auto md:flex flex-col justify-center md:w-[620px]">
          <h1 className="text-xl md:text-4xl uppercase font-bold poppins">
            WHY CHOOSE OUR PRODUCTS?
          </h1>
        </div>
      </div>

      <div className="lg:flex lg:justify-center m-auto rounded-lg p-10 md:-mt-44 -mt-72 md:grid w-full lg:gap-3 md:gap-2 sm:grid sm:grid-cols-2 lg:grid-col-3 sm:m-auto sm:gap-4 sm:-mt-44 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                elementsRef.current[index] = el;
              }
            }}
            className={`service-card bg-white shadow-md md:flex sm:justify-center my-2 lg:h-[28rem] lg:w-[22.7rem] rounded-lg ${expandedId === service.id ? 'expanded' : ''}`}
          >
            <div className="service-card-content mx-0 lg:w-[30rem] md:w-[18rem] sm:w-[16rem] p-[20px] flex justify-center items-center flex-col pt-5 gap-6 my-7">
              <div className="number-circle">{service.number}</div>
              <h3 className="font-semibold my-5 fontstyle">{service.title}</h3>
              <p className="text-center poppins font-light description">
                {service.description}
              </p>
              <button
                className="more-details-btn"
                onClick={() => toggleDescription(service.id)}
              >
                More Details
              </button>
            </div>
            <div
              className={`full-description-wrapper ${expandedId === service.id ? 'expanded' : ''}`}
            >
              <button
                className="close-btn"
                onClick={() => toggleDescription(service.id)}
              >
                ×
              </button>
              <p className="full-description poppins font-light">
                {service.fullDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;