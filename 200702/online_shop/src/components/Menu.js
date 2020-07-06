import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="container-2">
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/product">
        <li>Product</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </nav>
  );
};

export default Menu;
