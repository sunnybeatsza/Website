import React from "react";
import { Link } from "react-router-dom";
import "./Navigationbar.css";

function NavigationBar() {
  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center my-3 mx-1">
        <div style={{ fontFamily: "Inter" }}>
          <h3 className="text-light ms-5">Olympian Opulence</h3>
        </div>

        <div className="me-4" style={{ fontFamily: "Inter" }}>
          <Link to="/" className="me-5">
            Home
          </Link>
          <Link to="/About" className="me-5">
            About
          </Link>
          <Link to="/Sell" className="me-5">
            Sell
          </Link>
          <Link to="/Contact" className="me-5">
            Contact
          </Link>

          <i className="bi bi-person-fill text-light me-4"> Login</i>
          <i className="bi bi-box-arrow-in-right text-light me-3"> Register</i>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
