import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

function JobComponents() {
  const [startIndex, setStartIndex] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(3);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const jobs = [
    {
      title: "Sales",
      type: "Full-Time",
      description:
        "Join our retail company in Addis Ababa as a Store Manager to lead operations, enhance customer experience, and drive sales growth.",
      pdf: "/pdfs/sales_job.pdf",
    },
    {
      title: "Technical Manager and Sales",
      type: "Full-Time",
      description:
        "We are looking for a Technical Manager and Sales Lead to drive business growth, manage technical operations, and deliver innovative solutions to clients.",
      pdf: "/pdfs/technical-manager.pdf",
    },
    {
      title: "Operational Manager",
      type: "Full-Time",
      description:
        "We are looking for an Operational Manager to oversee daily business operations, improve efficiency, and ensure smooth workflow across all departments.",
      pdf: "/pdfs/operational-manager.pdf",
    },
  ];

  useEffect(() => {
    const updateJobsPerPage = () => {
      if (window.innerWidth < 640) {
        setJobsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setJobsPerPage(2);
      } else {
        setJobsPerPage(3);
      }
    };
    updateJobsPerPage();
    window.addEventListener("resize", updateJobsPerPage);
    return () => window.removeEventListener("resize", updateJobsPerPage);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - jobsPerPage < 0 ? Math.max(0, jobs.length - jobsPerPage) : prev - jobsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + jobsPerPage >= jobs.length ? 0 : prev + jobsPerPage
    );
  };

  const visibleJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Why Join Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Work With Us?
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re committed to providing meaningful careers with growth, collaboration, 
          and real impact in healthcare solutions.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            { title: "Innovative Projects", desc: "Work on impactful healthcare initiatives." },
            { title: "Collaborative Team", desc: "Grow in a supportive and diverse environment." },
            { title: "Career Growth", desc: "Access mentorship and leadership opportunities." },
            { title: "Global Impact", desc: "Contribute to solutions shaping healthcare worldwide." },
            { title: "Work-Life Balance", desc: "Flexible arrangements for your well-being." },
            { title: "Continuous Learning", desc: "Keep advancing your skills and expertise." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-lg shadow border border-gray-100 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-16 max-w-7xl mx-auto relative">
        <h3 className="text-center text-2xl font-bold mb-10 text-gray-800">
          Open Positions
        </h3>
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`absolute -left-6 sm:-left-10 p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition ${
              startIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {visibleJobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h4>
                  <span className="text-xs inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mb-3">
                    {job.type}
                  </span>
                  <p className="text-sm text-gray-600">{job.description}</p>
                </div>
                <button
                  onClick={() => setSelectedPdf(job.pdf)}
                  className="mt-6 bg-cyan-600 text-white py-2 px-4 rounded-md font-medium hover:bg-cyan-700 transition"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + jobsPerPage >= jobs.length}
            className={`absolute -right-6 sm:-right-10 p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition ${
              startIndex + jobsPerPage >= jobs.length ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl w-[90%] h-[85%] relative"
            >
              <button
                onClick={() => setSelectedPdf(null)}
                className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <FaTimes />
              </button>
              <embed src={selectedPdf} type="application/pdf" className="w-full h-full rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default JobComponents;
