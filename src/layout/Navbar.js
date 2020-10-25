import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light mb-3 navbar-expand-sm"
      style={{ background: "#FBFFBC" }}
    >
      <h3>
        <i className="fas fa-utensils"></i>
        <span> </span>The Recipe Rolodex
      </h3>
      <ul className="navbar-nav mr-5 ml-auto">
        <li className="nav-item float-right">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
