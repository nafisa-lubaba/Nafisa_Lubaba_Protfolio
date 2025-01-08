import React from 'react';
import AnimatedSectionHeading from '../Components/AnimatedSectionHeading';

const About = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16">
      {/* Simplified About Me header */}
      <div className="text-center mb-8 md:mb-12">
        <AnimatedSectionHeading text='About Me' />
      </div>

      {/* Responsive container */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
        {/* Text content */}
        <div className="w-full md:max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
            <span className="text-emerald-400">Nafisa Lubaba</span>
          </h1>
          
          <p className="text-white leading-relaxed text-center md:text-left">
            As an enthusiastic Junior Web Developer, I bring expertise in modern web technologies including HTML, CSS, JavaScript, and React.js. My growing knowledge of Node.js allows me to build comprehensive web solutions. I have a keen eye for creating intuitive, responsive websites that users love. Working alongside designers and experienced developers energizes me, as I believe great products come from great collaboration. My commitment to continuous learning and attention to detail drives me to stay current with emerging technologies. I'm ready to bring my creative problem-solving skills and technical expertise to your development team. Would you like to explore how we can work together?
          </p>
        </div>

        {/* Image container */}
        <div className="relative w-full md:w-auto mb-8 md:mb-0">
          {/* Background decoration */}
          <div className="absolute -z-10 top-8 -right-4 md:-right-8 w-full md:w-96 h-96 rounded-3xl" />
          
          {/* Profile image container */}
          <div className="w-64 md:w-80 h-80 md:h-96 overflow-hidden rounded-2xl mx-auto">
            <img
              src="https://i.ibb.co.com/JQQzWL7/profile-pic-Nafisa.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;