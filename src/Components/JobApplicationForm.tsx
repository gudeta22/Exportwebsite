import React, { useState, ChangeEvent, FormEvent } from 'react';

const JobApplicationForm: React.FC = () => {
  // const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cv: null as File | null,
    coverLetter: ''
  });

  // const openPositions = [
  //   'Software Engineer',
  //   'Product Manager',
  //   'Data Analyst',
  //   'UI/UX Designer',
  //   'Marketing Specialist',
  // ];

  // Handle position selection
  // const handlePositionSelect = (position: string) => {
  //   setSelectedPosition(position);
  //   setIsModalOpen(false); // Close the modal after selection
  // };

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input for CV
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      cv: e.target.files ? e.target.files[0] : null
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">JOIN OUR TEAM</h2>
        <p className="mt-2 text-gray-600">
          At Leam Healthcare Solutions, we believe in fostering a culture of innovation and collaboration. If you are passionate about making a difference in healthcare, we invite you to join our team. Explore exciting career opportunities today!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        // <div className="flex justify-center mb-4">
          {/* <select
            name="position"
            className="px-4 py-2 bg-green-200 text-gray-800 rounded-md cursor-pointer"
            onChange={(e) => handlePositionSelect(e.target.value)}
          >
            <option>APPLYING FOR →</option>
            {openPositions.map((position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            ))}
          </select> */}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md"
            />
            <div className="flex items-center">
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                className="w-full p-2 mb-4 border rounded-md"
              />
              <button
                type="button"
                className="ml-2 px-10 py-2 bg-cyan-500 text-white rounded-md"
              >
                 CV
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full h-40 p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-cyan-500 text-white rounded-md"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;