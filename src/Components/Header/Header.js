import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Shop from "../Shop/Shop";

const Header = () => {
  return (
    <nav className="header">
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
};

export default Header;
