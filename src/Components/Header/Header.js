import React from "react";
import { Link } from "react-router-dom";

import Shop from "../Shop/Shop";

const Header = () => {
  return (
    <nav>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
};

export default Header;
