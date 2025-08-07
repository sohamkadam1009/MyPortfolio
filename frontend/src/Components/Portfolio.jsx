import { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Real-time Chat Application",
      description:
        "Full-stack MERN application with Socket.io for real-time messaging, JWT authentication, and modern UI.",
      longDescription:
        "A comprehensive chat application built with React, Node.js, MongoDB, and Socket.io. Features include real-time messaging, user authentication, file sharing, and responsive design.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS",
      ],
      category: "fullstack",
      image: "image.png",
      liveLink: "https://chat-app-9vrq.onrender.com",
      githubLink: "https://github.com/sohamkadam1009/Chat_App",
      featured: true,
    },
    {
      id: 2,
      title: "Pune Estate Estimator",
      description:
        "ML-powered house price prediction tool with interactive dashboard and real-time data visualization.",
      longDescription:
        "Machine learning application that predicts house prices in Pune using Python, scikit-learn, and React frontend with interactive charts and maps.",
      technologies: [
        "Python",
        "React",
        "Scikit-learn",
        "Pandas",
        "Chart.js",
        "Flask",
      ],
      category: "ml",
      image: "image1.png",
      liveLink: "https://college-project-1222.onrender.com/",
      githubLink: "https://github.com/sohamkadam1009/college-project",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern animations and smooth user experience.",
      longDescription:
        "Personal portfolio website showcasing projects and skills with smooth animations, responsive design, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      image: "image2.png",
      liveLink: "/",
      githubLink: "#",
      featured: false,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "ml", label: "Machine Learning" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getColorByTech = (tech) => {
    const colorMap = {
      React: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
      "Node.js": "text-green-400 border-green-500/20 bg-green-500/10",
      MongoDB: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      "Socket.io": "text-purple-400 border-purple-500/20 bg-purple-500/10",
      JWT: "text-orange-400 border-orange-500/20 bg-orange-500/10",
      Python: "text-yellow-400 border-yellow-500/20 bg-yellow-500/10",
      JavaScript: "text-yellow-400 border-yellow-500/20 bg-yellow-500/10",
      HTML5: "text-red-400 border-red-500/20 bg-red-500/10",
      CSS3: "text-blue-400 border-blue-500/20 bg-blue-500/10",
      "Tailwind CSS": "text-teal-400 border-teal-500/20 bg-teal-500/10",
    };
    return colorMap[tech] || "text-gray-400 border-gray-500/20 bg-gray-500/10";
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-cyan-400 font-semibold tracking-widest mb-4 text-sm uppercase">
              My Work
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              A collection of projects showcasing my expertise in full-stack
              development, machine learning, and modern web technologies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-wrap gap-4 bg-gray-800/30 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      new URL(
                        `../assets/projectImages/${project.image}`,
                        import.meta.url
                      ).href
                    }
                    // src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveLink}
                      className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-300"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${getColorByTech(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.liveLink}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex-1 border border-gray-600 text-gray-300 py-2 px-4 rounded-lg text-center font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button
          <div
            className="text-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <button className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25">
              <span className="relative z-10">View More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
