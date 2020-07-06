import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";
import { Link } from "react-router-dom";

class ProductListItem extends Component {
  render() {
    const { item, addProduct } = this.props;

    return (
      <li>
        <span>
          <Link to={`/product/${item.id}`} key={item.id}>
            <h2>{item.productName}</h2> €{item.price}
          </Link>
          <div>
            {item.inventory > 0
              ? `x ${item.inventory} items left`
              : "sorry no more items"}
          </div>
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
