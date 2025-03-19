
const JobApplication = () => {
  // Replace this with your actual Google Form embed URL
  const googleFormUrl = "https://docs.google.com/forms/d/1sdsyI2t0SVeFN_TCkoUu4-B7sGvkAX9gEKsPY4ALWrU/edit";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Join Our Team
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Apply for an open position by filling out the form below. We can’t wait to hear from you!
          </p>
          <p className="mt-1 text-sm text-gray-500">
            For more details, check out the{' '}
            <a
              href="YOUR_GOOGLE_DOC_URL" // Replace with your Google Doc URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              job description
            </a>.
          </p>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="relative" style={{ paddingBottom: '75%' }}>
            <iframe
              src={googleFormUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Job Application Form"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobApplication;