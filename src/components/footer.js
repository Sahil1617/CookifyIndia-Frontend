import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer stiky-bottom">
      <div className="container text-center py-2">
        {/* Social Media Icons */}
        <div className="mb-2">
          <a href="#" className="social-icon"><i className="fa-brands fa-facebook fa-lg"></i></a>
          <a href="#" className="social-icon"><i className="fa-brands fa-instagram fa-lg"></i></a>
          <a href="#" className="social-icon"><i className="fa-brands fa-linkedin fa-lg"></i></a>
        </div>

        {/* Brand Info */}
        <div className="footer-brand">
          <strong>Cookify India Pvt. Ltd.</strong> &copy; 2025 — Crafted by{" "}
          <span className="creator-name">Sahil Jadhav</span>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <span className="divider"></span>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
