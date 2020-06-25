import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const items = this.props.data.map((item, i) => {
            return <ProductItem key={i} info={item} />;
        });
        return <ul>{items}</ul>;
    }
}