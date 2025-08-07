function Resume() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      duration: "May - Jun 2024",
      location: "Remote",
      description: [
        "Built interactive web projects including stopwatch, weather app, and to-do list",
        "Integrated external APIs and applied responsive design principles",
        "Earned Letter of Recommendation for initiative and strong project delivery",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      institution: "Fergusson College, Pune",
      duration: "2022 - 2025",
      gpa: "8.39/10.0",
      courses: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Database Management",
      ],
    },
  ];

  const skills = {
    frontend: [
      "JavaScript ES6+",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Memory Management",
    ],
    database: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
      "Postman",
      "VS Code",
      "Jest",
      "ChatGpt/claude/Co-pilot",
    ],
  };

  const certifications = [
    {
      title: "Upgrad Full-Stack Development Bootcamp (MERN Stack)",
      status: "Completed(May 2024 - Dec 2024)",
      link: "/Certificate_Upgrad_MERN.pdf",
      description:
        "Comprehensive bootcamp covering MongoDB, Express.js, React.js, and Node.js",
    },
    {
      title: "Web Development Internship Certificate",
      status: "Completed",
      link: "/Certificate_Internship_ProdigyInfotech.pdf",
      description:
        "Certified for successfully completing a remote Web Development internship at Prodigy InfoTech. Built interactive projects using HTML5, CSS3, and JavaScript, integrated APIs, and demonstrated strong project delivery.",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-cyan-400 font-semibold tracking-widest mb-4 text-sm uppercase">
              My Professional Journey
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Resume &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              A comprehensive overview of my education, experience, and
              technical expertise in full-stack development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {exp.role}
                          </h3>
                          <p className="text-cyan-400 font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {exp.location}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/20">
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-cyan-400 mr-3 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></span>
                  Education
                </h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-purple-400 font-semibold">
                            {edu.institution}
                          </p>
                          <p className="text-gray-400 text-lg font-semibold mt-2">
                            GPA: {edu.gpa}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20">
                          {edu.duration}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-white font-semibold mb-2">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3"></span>
                  Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-green-400 font-semibold text-sm mb-3">
                        {cert.status}
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold  bg-gradient-to-r from-cyan-400  to-blue-600  bg-clip-text text-transparent hover:from-blue-400 hover:to-cyan-400 transition-colors duration-300"
                      >
                        View Certificate
                      </a>
                      <p className="text-gray-400 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills Section */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div
                      key={category}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    >
                      <h3 className="text-lg font-semibold text-cyan-400 mb-4 capitalize">
                        {category.replace("_", " ")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div
            className="text-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="/SohamKadam_Fresher_Fullstack_Dev.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 inline-block"
            >
              <span className="relative z-10">
                <i className="fas fa-download"></i>Download Pdf Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
