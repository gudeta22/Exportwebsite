import { useState } from 'react';

function JobComponents() {
  const [startIndex, setStartIndex] = useState(0);

  const jobs = [
    {
      title: 'Healthcare Consultant',
      type: 'Full-Time',
      description:
        'Join our Healthcare Solutions Company in Addis Ababa as a Healthcare Consultant to drive innovation and improve patient care.',
      applyLink: 'https://docs.google.com/forms/d/1sdsyI2t0SVeFN_TCkoUu4-B7sGvkAX9gEKsPY4ALWrU/edit' // Replace with actual Google Form link
    },
    {
      title: 'Medical Sales',
      type: 'Full-Time',
      description:
        'We are looking for a Medical Sales Representative to expand our reach and provide cutting-edge healthcare solutions to clients.',
      applyLink: 'https://forms.gle/example2' // Replace with actual Google Form link
    },
    {
      title: 'Health IT',
      type: 'Full-Time',
      description:
        'Join our team as a Health IT Specialist and contribute to digital transformation in healthcare by implementing efficient IT solutions.',
      applyLink: 'https://forms.gle/example3' // Replace with actual Google Form link
    },
    {
      title: 'Clinical Research',
      type: 'Full-Time',
      description:
        'Work as a Clinical Research Associate to drive research and innovation, ensuring high standards in healthcare solutions.',
      applyLink: 'https://forms.gle/example4' // Replace with actual Google Form link
    },
    {
      title: 'Regulatory Affairs',
      type: 'Full-Time',
      description:
        'Join our company as a Regulatory Affairs Specialist to ensure compliance with healthcare regulations and improve service quality.',
      applyLink: 'https://forms.gle/example5' // Replace with actual Google Form link
    },
  ];

  const jobsPerPage = 3;

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
    <div>
      <div className="px-5 py-5 max-w-xl mx-auto">
        <h2 className="text-cyan-700 text-2xl mb-5">
          Why Join Our Healthcare Solutions Company?
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Innovative Solutions:</strong> Work on cutting-edge healthcare projects that enhance patient care.</li>
          <li><strong>Collaborative Environment:</strong> Join a diverse team committed to improving healthcare standards.</li>
          <li><strong>Career Growth:</strong> Access training, mentorship, and leadership opportunities.</li>
          <li><strong>Global Impact:</strong> Contribute to solutions that transform healthcare on a global scale.</li>
          <li><strong>Work-Life Balance:</strong> Enjoy flexible working arrangements that prioritize your well-being.</li>
        </ul>
      </div>

      <div className="px-5 py-10 max-w-6xl mx-auto relative">
        <h3 className="text-center mb-8 text-2xl">
          Open Positions at Our Healthcare Solutions Company
        </h3>
        <div className="flex justify-center items-center gap-5 relative">
          <button 
            onClick={handlePrev} 
            className={`absolute left-0 top-1/2 -translate-y-1/2 text-2xl ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={startIndex === 0}
          >
            ❮
          </button>

          {visibleJobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-cyan-600 text-white p-5 rounded-lg w-[300px] h-[300px] shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between mb-3">
                  <h4 className="text-lg m-0">{job.title}</h4>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm">{job.description}</p>
              </div>
              <div className="flex flex-col items-start">
                <a 
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border-none py-2 px-5  font-bold cursor-pointer hover:bg-gray-100 mb-2 text-center no-underline"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}

          <button 
            onClick={handleNext} 
            className={`absolute right-0 top-1/2 -translate-y-1/2 text-2xl ${startIndex + jobsPerPage >= jobs.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={startIndex + jobsPerPage >= jobs.length}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobComponents;