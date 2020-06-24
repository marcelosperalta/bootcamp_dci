import React from "react";

const ProductItem = (props) => {
    const { id, productName, icon, price, inventory } = props.info;

    return (
        <li key={id}>
            {productName} <i>{icon}</i>
            <h5>{price}</h5>
            <button disabled={inventory === 0}>
                {inventory > 0 ? "Add to cart" : "Sold out"}
            </button>
        </li>
    );
};

export default ProductItem;