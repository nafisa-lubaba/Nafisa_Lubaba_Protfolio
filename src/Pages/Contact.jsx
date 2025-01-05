import React, { useState } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import contactAnimation from "../assets/Contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="contact-section min-h-screen flex flex-col lg:flex-row items-center justify-center px-6">
      {/* Left Side: Lottie Animation and Introductory Text */}
      <motion.div className="lg:w-1/2 text-center lg:text-left" variants={fadeIn}>
        <motion.div
          className="w-full max-w-md mx-auto lg:mx-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Lottie options={defaultOptions} />
        </motion.div>
        <motion.h2 className="text-3xl font-bold mt-8" variants={fadeIn}>
          Let's Connect!
        </motion.h2>
        <motion.p className="text-gray-700 mt-4 text-lg" variants={fadeIn}>
          Ready to embark on a creative journey together?
        </motion.p>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.div className="lg:w-1/2 w-full max-w-md mt-12 lg:mt-0" variants={fadeIn}>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          {["name", "email", "message"].map((field) => (
            <div key={field} className="mb-4">
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows="4"
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${field}`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
