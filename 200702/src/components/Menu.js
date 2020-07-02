import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <Link to="/">
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