import { useState, useEffect } from 'react';

function JobComponents() {
  const [startIndex, setStartIndex] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(3);

  const jobs = [
    {
      title: 'Store Manager',
      type: 'Full-Time',
      description:'Join our retail company in Addis Ababa as a Store Manager to lead operations, enhance customer experience, and drive sales growth.',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScp_xI_Ci79TszDyKPTrmE8d3KhB5n213aVvm5vBz8rZn2QdQ/viewform?usp=header',
    },
    {
      title: 'Technical Manager and Sales',
      type: 'Full-Time',
      description:
        'We are looking for a Technical Manager and Sales Lead to drive business growth, manage technical operations, and deliver innovative solutions to clients.',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaMev9Ute8dZDkW2txPbH3jJVJyFoiYSUzfbHVElZh5XHKHA/viewform?usp=header',
    },
    {
      title: 'Operational Manager',
      type: 'Full-Time',
      description:'We are looking for an Operational Manager to oversee daily business operations, improve efficiency, and ensure smooth workflow across all departments.',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfvFTAHpjtM2Agk18iC7EzN60ruOgDgwYgsp7eHa3PaReKS-Q/viewform?usp=header',
    },
  ];

  // Dynamically adjust jobsPerPage based on screen size
  useEffect(() => {
    const updateJobsPerPage = () => {
      if (window.innerWidth < 640) {
        setJobsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setJobsPerPage(2); // Tablet
      } else {
        setJobsPerPage(3); // Desktop
      }
    };

    updateJobsPerPage();
    window.addEventListener('resize',updateJobsPerPage);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateJobsPerPage);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - jobsPerPage;
      return newIndex < 0 ? Math.max(0, jobs.length - jobsPerPage) : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + jobsPerPage;
      return newIndex >= jobs.length ? 0 : newIndex;
    });
  };

  const visibleJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Why Join Section */}
      <section className="px-4 py-6 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-cyan-700 text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
          Why Join Our Healthcare Solutions Company?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base lg:text-lg text-gray-700">
          <li>
            <strong>Innovative Solutions:</strong> Work on cutting-edge healthcare projects that enhance patient care.
          </li>
          <li>
            <strong>Collaborative Environment:</strong> Join a diverse team committed to improving healthcare standards.
          </li>
          <li>
            <strong>Career Growth:</strong> Access training, mentorship, and leadership opportunities.
          </li>
          <li>
            <strong>Global Impact:</strong> Contribute to solutions that transform healthcare on a global scale.
          </li>
          <li>
            <strong>Work-Life Balance:</strong> Enjoy flexible working arrangements that prioritize your well-being.
          </li>
        </ul>
      </section>

      {/* Open Positions Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-center mb-6 text-xl sm:text-2xl lg:text-3xl poppins  text-gray-800">
          Open Positions at Our Healthcare Solutions Company
        </h3>
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 text-xl sm:text-2xl lg:text-3xl z-10 p-2 rounded-full text-cyan-500   ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={startIndex === 0}
          >
            ❮
          </button>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 justify-items-center">
            {visibleJobs.map((job, index) => (
              <div
                key={index}
                className="bg-cyan-600 text-white p-4 sm:p-5 rounded-lg w-full max-w-[320px] h-[300px] sm:h-[320px] shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold m-0">{job.title}</h4>
                    {/* <span className="bg-white/20 px-2 py-1 rounded-full text-xs sm:text-sm">
                      {job.type}
                    </span> */}
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base">{job.description}</p>
                </div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-cyan-600 border-none py-2 px-4 sm:px-5 font-semibold rounded-md cursor-pointer hover:bg-gray-100 text-center no-underline text-sm sm:text-base"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 text-xl sm:text-2xl lg:text-3xl z-10 p-2 rounded-full  text-cyan-500 ${
              startIndex + jobsPerPage >= jobs.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={startIndex + jobsPerPage >= jobs.length}
          >
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}

export default JobComponents;