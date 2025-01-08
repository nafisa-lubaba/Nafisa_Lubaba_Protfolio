const Projects = () => {
  const projects = [
    {
      title: "ManageNest",
      description: "Efficient property management tool for modern businesses.",
      image: "https://i.ibb.co.com/HdrHY8p/Manage-Nest-img.png",
      clientLink: "https://github.com/nafisa-lubaba/ManageNest",
      serverLink: "https://github.com/nafisa-lubaba/ManageNest-Server",
      liveLink: "https://managenest.netlify.app",
    },
    {
      title: "AstrayStay",
      description: "Booking platform to find unique stays worldwide.",
      image: "https://i.ibb.co.com/yqJ1nP6/Astray-Stay-img.png",
      clientLink: "https://github.com/nafisa-lubaba/AstrayStay",
      serverLink: "https://github.com/nafisa-lubaba/AstroStay-server",
      liveLink: "https://astrostay1.netlify.app",
    },
    {
      title: "JourneyGenie",
      description: "Plan and explore seamless travel experiences.",
      image: "https://i.ibb.co.com/V3dkMgt/Journey-Genie-img.png",
      clientLink: "https://github.com/nafisa-lubaba/tourism-client",
      serverLink: "https://github.com/nafisa-lubaba/tourism-server",
      liveLink: "https://journey-genie-1.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 text-center  relative"
    >
      {/* Decorative SVG */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30 animate-pulse"
        >
          <path
            d="M400,300 C600,100 600,500 400,300 C200,100 200,500 400,300 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>
      <div className="text-center mb-12">
        <h2 className="inline-block text-2xl font-bold text-emerald-400 border-b-2 border-emerald-400 pb-2">
          My Projects
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.title + index}
            className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg px-4">{project.description}</p>
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <div className="flex justify-between items-center">
                <a
                  href={project.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                >
                  Client
                </a>
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                >
                  Server
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
