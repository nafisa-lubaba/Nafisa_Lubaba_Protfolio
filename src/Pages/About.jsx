import React from 'react';

const About = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      {/* Simplified About Me header */}
      <div className="text-center mb-12">
        <h2 className="inline-block text-2xl font-bold text-emerald-400 border-b-2 border-emerald-400 pb-2">
          About Me
        </h2>
      </div>

      <div className="mt-8 flex items-start justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-emerald-400">Nafisa Lubaba</span>
          </h1>
          
          <p className="text-white leading-relaxed">
            As an enthusiastic Junior Web Developer, I bring expertise in modern web technologies including HTML, CSS, JavaScript, and React.js. My growing knowledge of Node.js allows me to build comprehensive web solutions. I have a keen eye for creating intuitive, responsive websites that users love. Working alongside designers and experienced developers energizes me, as I believe great products come from great collaboration. My commitment to continuous learning and attention to detail drives me to stay current with emerging technologies. I'm ready to bring my creative problem-solving skills and technical expertise to your development team. Would you like to explore how we can work together?
          </p>
        </div>

        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -z-10 top-8 -right-8 w-96 h-96 rounded-3xl"/>
          
          {/* Profile image container */}
          <div className="w-80 h-96 overflow-hidden rounded-2xl">
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