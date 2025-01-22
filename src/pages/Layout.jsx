import React from "react";
import "../styles/layout.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="body-wrapper">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
