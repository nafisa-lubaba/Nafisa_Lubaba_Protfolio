import React, { useState } from 'react';

const AnimatedSectionHeading = ({ text = "About Me" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-300/20 to-emerald-400/20 
        blur-2xl transform scale-0 transition-transform duration-1000 ease-out
        group-hover:scale-150 animate-pulse"></div>

      {/* Ornamental circles */}
      <div className="absolute -left-4 top-1/2 w-8 h-8 border border-emerald-400/30 rounded-full
        transform -translate-y-1/2 transition-all duration-700 
        group-hover:scale-150 group-hover:border-emerald-400/60
        animate-[spin_4s_linear_infinite]"></div>
      <div className="absolute -right-4 top-1/2 w-8 h-8 border border-emerald-400/30 rounded-full
        transform -translate-y-1/2 transition-all duration-700 
        group-hover:scale-150 group-hover:border-emerald-400/60
        animate-[spin_4s_linear_infinite_reverse]"></div>

      {/* Main container */}
      <div className="group relative">
        {/* Geometric background patterns */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400
            transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0
            transition-transform duration-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400
            transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0
            transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400
            transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0
            transition-transform duration-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400
            transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0
            transition-transform duration-500"></div>
        </div>

        {/* Main heading */}
        <h2 className="relative text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-emerald-400 to-emerald-500
          transition-all duration-500 ease-out transform
          hover:scale-105 px-4 py-2">
          
          {/* Animated letters */}
          {text.split('').map((letter, index) => (
            <span 
              key={index}
              className="inline-block transition-all duration-300
                hover:text-emerald-300 hover:-translate-y-1 hover:scale-110"
              style={{
                transitionDelay: `${index * 50}ms`,
                animation: isHovered ? `float 1.5s ease-in-out infinite ${index * 100}ms` : 'none'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}

          {/* Underline effect */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 
            bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400
            transform origin-left scale-x-0 transition-transform duration-500
            group-hover:scale-x-100"></div>

          {/* Floating particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full
                opacity-0 group-hover:opacity-100 transition-all duration-1000"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${2 + Math.random()}s ease-in-out infinite ${i * 200}ms`,
                transform: 'scale(0)',
              }}
            />
          ))}
        </h2>

        {/* Accent lines */}
        <div className="absolute -left-2 top-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400/0 via-emerald-400 to-emerald-400/0
          transform -translate-y-1/2 scale-y-0 transition-transform duration-500
          group-hover:scale-y-100"></div>
        <div className="absolute -right-2 top-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400/0 via-emerald-400 to-emerald-400/0
          transform -translate-y-1/2 scale-y-0 transition-transform duration-500
          group-hover:scale-y-100"></div>
      </div>
    </div>
  );
};

// Add the required keyframe animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }

  @keyframes particle-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(0.5); }
  }
`;
document.head.appendChild(style);

export default AnimatedSectionHeading;