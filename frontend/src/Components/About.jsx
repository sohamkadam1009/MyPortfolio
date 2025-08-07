function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["JavaScript ES6+", "React.js", "Tailwind CSS", , "CSS3", "HTML5"],
      color: "cyan",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "EJS", "REST APIs"],
      color: "blue",
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "purple",
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Vercel", "Netlify", "Render", "Jest"],
      color: "green",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-cyan-400 font-semibold tracking-widest mb-4 text-sm uppercase">
              Get to know me
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Text Content */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-4">
                  My Journey
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer pursuing BSc Computer
                  Science at Fergusson College, Pune (GPA: 8.39/10.0). My
                  expertise lies in creating robust, scalable web applications
                  using the MERN stack.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What started as curiosity about web development has evolved
                  into a deep passion for solving complex problems through
                  elegant code and innovative solutions.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Web Development Intern
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Prodigy InfoTech • Remote • May-Jun 2024
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>
                        Built interactive web applications with HTML5, CSS3, and
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>
                        Integrated external APIs and implemented responsive
                        design principles
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>
                        Earned Letter of Recommendation for exceptional
                        performance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats & Achievements */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1", label: "Academic Projects", color: "cyan" },
                  { number: "450+", label: "Hours of Bootcamp", color: "blue" },
                  { number: "1", label: "Internship", color: "purple" },
                  { number: "8.39", label: "Academic GPA", color: "green" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-${stat.color}-500/30 transition-all duration-300 text-center group`}
                  >
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Education & Certifications
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">
                      BSc Computer Science
                    </h3>
                    <p className="text-cyan-400">Fergusson College, Pune</p>
                    <p className="text-gray-400 text-sm">
                      2022 - 2025 • GPA: 8.39/10.0
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">
                      Full-Stack Development Bootcamp
                    </h3>
                    <p className="text-blue-400">Upgrad (MERN Stack)</p>
                    <p className="text-gray-400 text-sm">May 2024 - Dec 2024</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">
                      AI Engineering Course
                    </h3>
                    <p className="text-purple-400">Upgrad</p>
                    <p className="text-gray-400 text-sm">Currently Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-${skillGroup.color}-500/30 transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3
                    className={`text-xl font-semibold text-${skillGroup.color}-400 mb-4 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 bg-${skillGroup.color}-500/10 text-${skillGroup.color}-300 text-sm rounded-full border border-${skillGroup.color}-500/20 hover:border-${skillGroup.color}-500/50 transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex justify-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default About;
