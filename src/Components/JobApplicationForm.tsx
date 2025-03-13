import React, { useState, ChangeEvent } from 'react';

const JobApplicationForm: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  // Define open positions and their corresponding Google Form URLs
  const openPositions = [
    { name: 'Select a Position', url: '' },
    { name: 'Software Engineer', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdLzTEADT-vWoQBvGAr53yxoCKn5vq6fd48YnIO1NN3GC7X5A/viewform?usp=dialog' },
    { name: 'Product Manager', url: 'https://forms.gle/product-manager-form' },
    { name: 'Data Analyst', url: 'https://forms.gle/data-analyst-form' },
    { name: 'UI/UX Designer', url: 'https://forms.gle/ui-ux-designer-form' },
    { name: 'Marketing Specialist', url: 'https://forms.gle/marketing-specialist-form' },
  ];

  // Handle position selection and redirect
  const handlePositionSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedPosition(selectedValue);

    // Find the selected position's URL and redirect
    const position = openPositions.find(pos => pos.name === selectedValue);
    if (position && position.url) {
      window.open(position.url, '_blank'); // Opens form in new tab
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Text */}
        <div className="text-left md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 uppercase mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Are you passionate about healthcare innovation? Explore career
            opportunities with us and be part of a team that’s making a
            difference.
          </p>
        </div>

        {/* Right Section: Dropdown Button */}
        <div className="relative md:w-1/3 flex justify-end">
          <div className="relative inline-block">
            <select
              value={selectedPosition}
              onChange={handlePositionSelect}
              className="appearance-none bg-cyan-600 text-gray-800 font-semibold py-3 px-6  cursor-pointer  transition-colors focus:outline-none"
            >
              <option value="" className='text-white' disabled hidden>
                Check Open Positions
              </option>
              {openPositions.map((position, index) => (
                <option key={index} value={position.name}>
                  {position.name}
                </option>
              ))}
            </select>
            {/* Dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;