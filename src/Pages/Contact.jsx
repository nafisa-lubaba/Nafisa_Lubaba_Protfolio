import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import contactAnimation from "../assets/Contact.json";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [activeField, setActiveField] = useState(null);

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

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Generate bubbles in the background
  useEffect(() => {
    const numBubbles = 20; // number of bubbles
    const container = document.querySelector('.bubble-container');
    
    if (container) {
      for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        container.appendChild(bubble);

        // Randomize bubble properties
        const size = Math.random() * (60 - 20) + 20; // Size between 20 and 60
        const positionX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * (10 - 5) + 5;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${positionX}%`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;
      }
    }
  }, []);

  return (
    <section className="contact-section min-h-screen relative text-white">
      {/* Animated Background Circles */}
      <div className="background-circle bg-teal-700"></div>
      <div className="background-circle bg-teal-600 delayed"></div>
      <div className="background-circle bg-teal-800 slow"></div>

      {/* Particle and Bubble Animation */}
      <div className="bubble-container"></div>

      <motion.div
        className="relative container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Lottie Animation & Text */}
        <motion.div className="lg:w-1/2 text-center lg:text-left" variants={fadeIn}>
          <motion.div
            className="w-full max-w-md mx-auto lg:mx-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Lottie options={defaultOptions} />
          </motion.div>
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-8"
            variants={fadeIn}
          >
            Let's Connect!
          </motion.h2>
          <motion.p className="text-teal-200 mt-4 text-lg" variants={fadeIn}>
            Ready to embark on a creative journey together?
          </motion.p>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div className="lg:w-1/2 w-full max-w-md" variants={fadeIn}>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-blue-600/30 to-purple-600/30 rounded-2xl blur-xl transform -rotate-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            ></motion.div>
            <motion.form
              className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
              variants={fadeIn}
            >
              {["name", "email", "message"].map((field) => (
                <div
                  key={field}
                  className="mb-6 group"
                  onMouseEnter={() => setActiveField(field)}
                  onMouseLeave={() => setActiveField(null)}
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    {field === "message" ? (
                      <textarea
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        rows={4}
                        className="form-input"
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        className="form-input"
                      />
                    )}
                  </div>
                </div>
              ))}

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

