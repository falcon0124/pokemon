import React from "react";
import logo from "../assets/logo.png"; 
import "../App.css";

const Header = () => (
  <header className="header">
    <h1>
      <img src={logo} alt="Logo" height="100"/>
    </h1>
  </header>
);

export default Header;

