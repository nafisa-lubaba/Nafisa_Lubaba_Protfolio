import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from "../assets/Hi.json"; 
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const Bubble = ({ className }) => (
    <div 
      className={`absolute rounded-full backdrop-blur-3xl ${className}`}
      style={{
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
      }}
    />
  );

  const SocialIcon = ({ Icon, href, label }) => (
    <a
      href={href}
      className="relative group"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div
        className="p-4 rounded-full bg-white/10 backdrop-blur-md
                  transform transition-all duration-300
                  hover:bg-white/20 hover:scale-110"
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                  text-sm text-white opacity-0 transition-all duration-300
                  group-hover:opacity-100"
      >
        {label}
      </span>
    </a>
  );

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-50">
        <Bubble className="w-96 h-96 bg-teal-400/30 -top-20 -left-20 animate-float-slow" />
        <Bubble className="w-80 h-80 bg-emerald-400/30 top-1/2 -right-20 animate-float-medium" />
        <Bubble className="w-72 h-72 bg-cyan-400/30 bottom-20 left-1/3 animate-float-fast" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
              Nafisa Lubaba
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Front-End Developer passionate about creating dynamic and user-friendly websites.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link to='/projects' className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all">
              See My Work
            </Link>
            <Link to="/contact" className="border border-teal-500 text-teal-300 hover:bg-teal-500/10 px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all">
              Contact Me
            </Link>
          </div>
          <div className="flex gap-6 justify-center md:justify-start mt-12">
            {[
              { Icon: GithubIcon, href: "https://github.com/nafisa-lubaba", label: "GitHub" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/nafisalubabain/", label: "LinkedIn" },
              { Icon: MailIcon, href: "mailto:nafisalubaba71@gmail.com", label: "Email" },
            ].map((social) => (
              <SocialIcon key={social.label} {...social} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
            }}
          >
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDownIcon className="w-8 h-8 text-white/50 animate-bounce" />
      </div>
    </section>
  );
};

export default Home;

