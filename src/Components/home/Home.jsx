/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "./../../Assets/logo.png";
const Home = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="home-container">
      <nav>
        <div className="nav-logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        
        <div className={`navbar-links-container ${menu ? "active" : ""}`}>
          <a href="">
            {" "}
            <Link to="/">Home</Link>
          </a>
          <a href="">
            {" "}
            <Link to="/signup">Sign Up</Link>
          </a>
          <a href="">
            {" "}
            <Link to="/login">Log in</Link>
          </a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={handleMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Home;
