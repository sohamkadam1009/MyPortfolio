import image from "../assets/image.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hiring Inquiry - Fresher Developer");
    const body = encodeURIComponent(
      `Hi Soham,

I came across your portfolio and I'm impressed with your skills. I have a project opportunity that might be a great fit for a talented fresher like you.

Would you be interested in discussing the details?

Best regards`
    );

    window.location.href = `mailto:soham@example.com?subject=${subject}&body=${body}`;
  };

  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <section className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-[calc(100vh-5rem)] relative z-10">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p
                className="text-cyan-400 font-semibold tracking-widest text-sm uppercase animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Welcome to my world
              </p>
              <h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Soham
                </span>
              </h1>
              <div
                className="text-2xl lg:text-3xl text-gray-300 h-12 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <span>a </span>
                <span className="text-cyan-400 font-semibold">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p
              className="text-gray-400 text-lg leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Crafting digital experiences with cutting-edge technologies.
              Specialized in MERN stack development, creating scalable solutions
              that drive business growth and user satisfaction.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                onClick={handleHireMe}
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25"
                onClick={handleViewPortfolio}
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex space-x-6 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              {[
                { icon: "github", link: "https://github.com/sohamkadam1009" },
                {
                  icon: "linkedin",
                  link: "https://linkedin.com/in/soham-kadam-8579102aa",
                },
                { icon: "twitter", link: "https://x.com/soham_kadam1009" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.link}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center items-center animate-fade-in-right">
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={image}
                alt="Soham Kadam"
                className="relative w-80 lg:w-96 h-80 lg:h-96 object-cover rounded-md border-4 border-gray-800"
              />

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator (optional: hide on small screens if needed) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
