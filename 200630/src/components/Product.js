import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const items = props.data.map((item) => {
        const { id, productName, icon } = item;
        return (
            <Link key={id} to={`/product/${id}`}>
                <li>
                    {productName} <i>{icon}</i>
                </li>
            </Link>
        );
    });
    return (
        <React.Fragment>
            <h3>Product </h3>
            <ul>{items}</ul>
        </React.Fragment>
    );
};

export default Product;