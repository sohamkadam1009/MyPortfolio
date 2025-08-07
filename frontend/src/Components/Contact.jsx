import React, { useState } from "react";

const REACT_APP_BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || "";

function Contact() {
  // Keep error state for potential URL-based error handling
  const [error, setError] = useState(null);

  // Static info and links (for display)
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "sohamkadam1009@gmail.com",
      description: "Send me an email",
      color: "cyan",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 7385214596",
      description: "Call me directly",
      color: "blue",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Pune, Maharashtra",
      description: "Come say hello",
      color: "purple",
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      value: "24 Hours",
      description: "Average response time",
      color: "green",
    },
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      link: "https://github.com/sohamkadam1009",
      color: "text-gray-400 hover:text-white",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://linkedin.com/in/soham-kadam-8579102aa",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: "fab fa-twitter",
      link: "https://x.com/soham_kadam1009",
      color: "text-cyan-400 hover:text-cyan-300",
    },
    {
      icon: "fab fa-instagram",
      link: "#",
      color: "text-pink-400 hover:text-pink-300",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-cyan-400 font-semibold tracking-widest mb-4 text-sm uppercase">
              Get In Touch
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Ready to turn your ideas into reality? Let's discuss your project
              and create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate
                  with passionate individuals. Whether you have a specific
                  project in mind or just want to explore possibilities, I'd
                  love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-${info.color}-500/30 transition-all duration-300 group`}
                  >
                    <div
                      className={`w-12 h-12 bg-${info.color}-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i
                        className={`${info.icon} text-${info.color}-400 text-xl`}
                      ></i>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {info.title}
                    </h3>
                    <p className={`text-${info.color}-400 font-medium mb-1`}>
                      {info.value}
                    </p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-white font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">
                    Available for new projects
                  </span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">
                  Currently accepting new freelance and full-time opportunities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Message
                </h2>

                <form
                  action="/contactConfirm"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry, collaboration, etc."
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    ></textarea>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
