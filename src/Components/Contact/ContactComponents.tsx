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
        'service_z9a2m48', // Replace with your EmailJS service ID
        'template_l26es9x', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '5P0RbWSw_5jBIb2nn' // Replace with your EmailJS public key
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Drop us a message or find us on the map.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[50vh] rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019716305142!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b1a64e5b3%3A0xafeec4ad139d3e39!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1697678945623!5m2!1sen!2s"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing our location in San Francisco, CA"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl -mt-24 relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  value: 'San Francisco, CA, United States',
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
                <div
                  key={index}
                  className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-600">{item.value}</p>
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