import React from "react";
import { Link } from "react-router-dom";

export const Terms = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card shadow-lg p-4 mt-5 w-75">
        <h1 className="text-center text-primary mb-3">Terms & Conditions</h1>
        <p className="lead text-muted text-center">
          Welcome to SwaadConnect! By using our platform, you agree to the following terms and conditions.
        </p>
        <hr />

        <div className="mb-4">
          <h2 className="h4 text-secondary">1. User Responsibilities</h2>
          <p>Users must ensure that the recipes they share are original or properly credited.</p>
        </div>

        <div className="mb-4">
          <h2 className="h4 text-secondary">2. Content Ownership</h2>
          <p>SwaadConnect reserves the right to use uploaded content for promotional purposes.</p>
        </div>

        <div className="mb-4">
          <h2 className="h4 text-secondary">3. Prohibited Activities</h2>
          <p>Users must not post offensive, harmful, or plagiarized content.</p>
        </div>

        <div className="mb-4">
          <h2 className="h4 text-secondary">4. Account Termination</h2>
          <p>We reserve the right to terminate accounts that violate these terms.</p>
        </div>

        <div className="mb-4">
          <h2 className="h4 text-secondary">5. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the platform constitutes agreement to the new terms.</p>
        </div>

        <p className="text-center fw-bold">
          If you have any questions, contact us at{" "}
          <a href="mailto:cookifyindia@gmail.com" className="text-primary fw-bold">
            cookifyindia@gmail.com
          </a>.
        </p>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-outline-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
