import React from "react";
import handleSubmit from "../Components/handleSubmit";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="mt-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Get In Touch</h2>
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://jigarsable.netlify.app/assets/images/contact1.png"
              alt="Contact illustration"
              className="max-w-full h-auto"
            />
          </div>
          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-8">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Mobile Number Field */}
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
            {/* Display Success/Error Message */}
            <p id="form-message" className="mt-4 text-center"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
