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
      <motion.div
        className="lg:w-1/2 w-full text-center lg:text-left mb-12 lg:mb-0"
        variants={fadeIn}
      >
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
        <motion.p className="text-white mt-4 text-lg" variants={fadeIn}>
          Ready to embark on a creative journey together?
        </motion.p>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.div
        className="lg:w-1/2 w-full max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md bg-white/30 bg-opacity-40 border border-white/20"
        variants={fadeIn}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Us</h2>
          {["name", "email", "message"].map((field) => (
            <div key={field} className="mb-6">
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-200 mb-2"
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
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-gray-900"
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-gray-900"
                  placeholder={`Enter your ${field}`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#0d5748] text-white py-2 rounded-md hover:bg-[#0b7061] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

