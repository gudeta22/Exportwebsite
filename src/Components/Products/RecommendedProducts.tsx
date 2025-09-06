import { useState } from "react";
import { motion } from "framer-motion";

// All products grouped by category
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Category = "ECGMachines" | "ultrasound" | "Obstetrics" ;

const allProducts: Record<Category, Product[]> = {
  ECGMachines: [
    {
      id: 1,
      title: "SE-1200 Pro/SE-1201 Pro Series – 12-Channel ECG Machine",
      description:
        "A high-performance 12-channel ECG machine designed for accurate cardiac diagnosis with intuitive workflow and advanced analysis tools.",
      image: "https://www.edan.com/Uploads/20221018051058_394949.jpg",
    },
    {
      id: 2,
      title: "iSE Series – 12/18-lead ECG Machine",
      description:
        "Portable and reliable ECG system supporting both 12 and 18 leads, ideal for clinics and hospitals requiring precise heart monitoring.",
      image: "https://www.edan.com/Uploads/20201114094024_612502.jpg",
    },
    {
      id: 3,
      title: "SE-1202 – 12-Lead ECG Workstation",
      description:
        "A workstation-based ECG system providing advanced analysis, seamless connectivity, and streamlined patient data management.",
      image: "https://www.edan.com/Uploads/20201114092047_577358.jpg",
    },
    {
      id: 4,
      title: "SE-18 – 18-Lead ECG Workstation",
      description:
        "An advanced 18-lead ECG workstation designed to deliver comprehensive cardiac assessments with clear visualization and accuracy.",
      image: "https://www.edan.com/Uploads/20191104013229_303918.jpg",
    },
    {
      id: 5,
      title: "SE-12 Series – 12-Channel ECG Machine",
      description:
        "Compact 12-channel ECG machine with efficient operation, suitable for routine examinations and hospital environments.",
      image: "https://www.edan.com/Uploads/20191104013938_538255.jpg",
    },
  ],
  ultrasound: [
    {
      id: 6,
      title: "Acclarix LX3 – Shared Service Ultrasound System",
      description:
        "A portable ultrasound system designed for versatility across multiple clinical applications with excellent imaging quality.",
      image: "https://www.edan.com/Uploads/20201117111341_638881.jpg",
    },
    {
      id: 7,
      title: "Acclarix LX9 – Premium Shared Service Ultrasound System",
      description:
        "A premium ultrasound solution offering advanced imaging technologies for cardiology, obstetrics, gynecology, and general medicine.",
      image: "https://www.edan.com/Uploads/20200729032528_697571.jpg",
    },
    {
      id: 8,
      title: "Acclarix LX8 – Advanced Shared Service Ultrasound System",
      description:
        "Designed for high-level diagnostic performance with superior image clarity and smart workflow features for busy practices.",
      image: "https://www.edan.com/Uploads/20191105044533_600793.jpg",
    },
    {
      id: 9,
      title: "U2 – Portable Ultrasound System",
      description:
        "A lightweight and portable ultrasound system delivering reliable imaging for bedside, emergency, and point-of-care use.",
      image: "https://www.edan.com/Uploads/20191105044557_007018.jpg",
    },
  ],
  Obstetrics: [
    {
      id: 10,
      title: "F15 & F15A – Fetal & Maternal Monitor",
      description:
        "A comprehensive fetal and maternal monitoring system providing accurate data for prenatal care and labor management.",
      image: "http://edan.com/Uploads/20210113032258_654998.jpg",
    },
    {
      id: 11,
      title: "F9 – Series with Telemetry",
      description:
        "A reliable fetal and maternal monitor designed for ease of use, delivering essential information for effective prenatal monitoring.",
      image: "http://edan.com/Uploads/20191104051150_257024.jpg",
    },
    {
      id: 12,
      title: "F6 – Series",
      description:
        "A user-friendly fetal and maternal monitoring system offering essential features for accurate prenatal assessments.",
      image: "http://edan.com/Uploads/20191231052721_227603.jpg",
    },
    {
      id: 13,
      title: "F3 – Series",
      description:
        "A compact fetal and maternal monitor providing reliable performance and essential monitoring capabilities for prenatal care.",
      image: "http://edan.com/Uploads/20191104105024_413293.jpg",
    },
    {
      id: 14,
      title: "F2 – Series",
      description:
        "An entry-level fetal and maternal monitoring system designed for basic prenatal monitoring needs with ease of operation.",
      image: "http://edan.com/Uploads/20191104104528_397656.jpg",

    },
    {
      id: 15,
      title: "FTS-6 Mobile",
      description:
        "A simple and effective fetal and maternal monitor ideal for clinics and healthcare settings requiring essential monitoring functions.",
      image: "http://edan.com/Uploads/20191104015627_413249.jpg",
    },
    { id: 16,
      title: "MFM-CNS/MFM-CNS Lite",
      description:
        "A reliable fetal and maternal monitoring system providing essential features for accurate prenatal assessments in various clinical settings.",
      image: "http://edan.com/Uploads/20191104110137_022654.jpg",
    },  
    { id: 17,
      title: "SD3 – Series",
      description:
        "A high-end fetal and maternal monitoring system designed for advanced prenatal care with comprehensive monitoring capabilities.",
      image: "http://edan.com/Uploads/20191104105707_397709.jpg",
    },  
  


  
  ],
  
};


const RecommendedProducts = () => {
  const categories = Object.keys(allProducts) as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {allProducts[selectedCategory]?.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl border border-cyan-600 shadow-sm p-4 sm:p-5 flex flex-col hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="w-full h-36 sm:h-40 md:h-44 flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-cyan-600 mb-1.5 sm:mb-2">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 flex-1 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
