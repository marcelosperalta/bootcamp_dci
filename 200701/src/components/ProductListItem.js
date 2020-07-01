import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

class ProductListItem extends Component {
    render() {
        const { item, addProduct } = this.props;

        return (
            <li>
                <span>
                    <h4>{item.productName}</h4> €{item.price}
                    {<div>
                        {item.inventory > 0 ? `x ${item.inventory} items left` : "sorry no more items"}
                    </div>}
                </span>
                <i>{item.icon}</i>
                <div>
                    <button
                        onClick={() => addProduct(item)}
                        disabled={item.inventory === 0}
                    >
                        {item.inventory > 0 ? "Add to cart" : "Sold out"}
                    </button>
                </div>
            </li>
        );
    }
}
const mapStoreToProps = (store) => { };
const mapActionsToProps = {
    addProduct,
};
export default connect(mapStoreToProps, mapActionsToProps)(ProductListItem);