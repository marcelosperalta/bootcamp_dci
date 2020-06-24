import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const items = props.data.map((item) => {
        return <ProductItem info={item} />;
    });
    return <div>{items}</div>;
};

export default ProductList;