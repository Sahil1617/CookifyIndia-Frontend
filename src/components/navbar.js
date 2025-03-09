import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Custom styles

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fa-solid fa-utensils me-2"></i> Cookify India
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/create-recipe">New Recipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved-recipes">Saved Recipes</Link>
            </li>
            {!cookies.access_token ? (
              <li className="nav-item">
                <Link className="nav-link btn btn-custom px-4" to="/auth">
                  Signin / Signup
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-logout px-4" onClick={logout}>
                  Signout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
