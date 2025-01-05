import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Bubble component
  const Bubble = ({ className }) => (
    <div 
      className={`absolute rounded-full backdrop-blur-3xl ${className}`}
      style={{
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
      }}
    />
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-900" />
      
      {/* Animated bubbles */}
      <div className="absolute inset-0 opacity-50">
        <Bubble className="w-96 h-96 bg-teal-400/30 -top-20 -left-20 animate-float-slow" />
        <Bubble className="w-80 h-80 bg-emerald-400/30 top-1/2 -right-20 animate-float-medium" />
        <Bubble className="w-72 h-72 bg-cyan-400/30 bottom-20 left-1/3 animate-float-fast" />
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;