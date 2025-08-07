import React from "react";
import { Link } from "react-router-dom"; // Remove this line if you're not using React Router

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a202c 0%, #243c5a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", color: "#38d9a9", margin: 0 }}>404</h1>
      <h2 style={{ color: "#fff", marginBottom: 16 }}>Page Not Found</h2>
      <p style={{ color: "#cbd5e1", maxWidth: 400, margin: "0 auto 24px" }}>
        Sorry, the page you are looking for does not exist, has been moved, or
        is temporarily unavailable.
      </p>
      {/* If using React Router */}
      <Link
        to="/"
        style={{
          padding: "12px 36px",
          background: "linear-gradient(90deg, #38d9a9 0%, #1976d2 100%)",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: 6,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(56,217,169,0.18)",
        }}
      >
        Go Home
      </Link>
      {/* If NOT using React Router, use:
      <a href="/" style={{ ...same styles... }}>Go Home</a>
      */}
    </div>
  );
}

export default NotFound;
