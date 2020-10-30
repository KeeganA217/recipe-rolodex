import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-3 navbar-expand-sm">
      <h3>
        <span className="icon">
          <i className="fas fa-utensils"></i>
        </span>
        <span className="title">The Recipe Rolodex</span>
      </h3>
      <ul className="mr-5 ml-auto">
        <li className="item float-right">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
