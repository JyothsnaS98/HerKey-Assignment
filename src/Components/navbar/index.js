import React from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar-container">
        <div className="logo-container">
            <img src={logo} alt="logo"/>
        </div>
        <div className="navbar-content"> 
            <span className="menu">How we do it</span>
            <span className="menu">Be a Chamipion</span>
            <span className="menu">Meet our Team</span>
            <span className="menu">Contact US</span>
            <button className="sign-up">Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;
