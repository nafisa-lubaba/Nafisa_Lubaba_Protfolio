

const Projects = () => {
    const projects = [
        {
          title: "ManageNest",
          description: "Description.",
          image: "path-to-project1-image.jpg", 
          link: "https://managenest.netlify.app" 
        },
        {
          title: "AstrayStay",
          description: "Description ",
          image: "path-to-project2-image.jpg",
          link: "https://astrostay1.netlify.app"
        },
        {
          title: "JourneyGenie",
          description: "Description",
          image: "path-to-project3-image.jpg",
          link: "https://journey-genie-1.netlify.app"
        },
      ];
    return (
        <section id="projects" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Projects;