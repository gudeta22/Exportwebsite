'use client';

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactComponents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_z9a2m48', // Replace with your service ID
        'template_l26es9x', // Replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '5P0RbWSw_5jBIb2nn' // Replace with your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };
   
  return (
    <div className="container px-6 md:px-12 py-10">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-white px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-md border border-gray-200 rounded-lg">
          <div className="flex flex-wrap">
            {/* Contact Form */}
            <div className="w-full md:px-3 lg:w-5/12 lg:px-6 mb-12">
              <form onSubmit={sendEmail}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 p-3 rounded focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 p-3 rounded focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-2 p-3 rounded focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-7/12 flex flex-wrap">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  value: 'San Francisco, CA\nUnited States',
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  value: 'contact@example.com',
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  value: '+1 (555) 123-4567',
                },
                {
                  icon: '🕒',
                  title: 'Hours',
                  value: 'Mon - Fri: 9am - 5pm',
                },
              ].map((item, index) => (
                <div key={index} className="w-full md:w-6/12 p-4">
                  <div className="flex items-start">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="ml-4">
                      <p className="font-bold">{item.title}</p>
                      <p className="whitespace-pre-line text-gray-600">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponents;
