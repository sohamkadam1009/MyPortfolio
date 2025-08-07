import React from "react";
import { Link } from "react-router-dom";

function ContactConfirm() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-12 text-center shadow-2xl border border-gray-700/50 animate-fade-in-up relative z-10 max-w-md mx-auto">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="fas fa-check text-white text-3xl"></i>
        </div>

        {/* Thank You Message */}
        <h2 className="text-4xl font-bold text-white mb-6">Thank You!</h2>
        <p className="text-gray-300 text-lg mb-8">
          Your message has been received successfully. I'll get back to you
          within 24 hours!
        </p>

        {/* Go Back to Home Button */}
        <Link
          to="/"
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 inline-block"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <i className="fas fa-home"></i>
            <span>Go Back to Home</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </section>
  );
}

export default ContactConfirm;
