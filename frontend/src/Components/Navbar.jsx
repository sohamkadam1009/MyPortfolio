import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="logo">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              &lt;Soham.dev/&gt;
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="block lg:hidden cursor-pointer p-2"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block w-full h-0.5 bg-cyan-400 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-cyan-400 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-cyan-400 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {["Home", "About", "Resume", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-8">
              {["Home", "About", "Resume", "Portfolio", "Contact"].map(
                (item, index) => (
                  <li
                    key={item}
                    className={`transform transition-all duration-500 ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-2xl text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
