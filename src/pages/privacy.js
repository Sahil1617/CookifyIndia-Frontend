import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";

export const Privacy = () => {
  return (
    <div className="container privacy-container">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-4">Privacy Policy</h1>
        <p className="lead text-muted text-center">
          Your privacy is important to us. This policy explains how we handle your data.
        </p>
        <hr />

        <div className="mb-4">
          <h2 className="text-secondary">1. Information We Collect</h2>
          <p>We collect personal data such as your name, email, and any other details provided during registration.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-secondary">2. How We Use Your Information</h2>
          <p>Your information is used for authentication, improving user experience, and providing better services.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-secondary">3. Data Protection</h2>
          <p>We implement security measures to ensure your data is safe and not shared with unauthorized parties.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-secondary">4. Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us at <a href="mailto:cookifyindia@gmail.com" className="text-primary">cookifyindia@gmail.com</a></p>
        </div>

        <div className="text-center mt-4">
                  <Link to="/" className="btn btn-outline-primary">
                    Back to Home
                  </Link>
        </div>
      </div>
    </div>
  );
};
