import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/Home">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </nav>
  );
};

export default Menu;
