import React, { Component } from "react";
// step 1
import { removeOne, removeAll } from "../actions";
import { connect } from "react-redux";

class ShoppingCartItem extends Component {
  render() {
    // step 3
    const { item, removeOne, removeAll } = this.props;

    return (
      <li className="cart">
        {/* <p className="item-price-qty">
          {item.productName} | € {item.price} | x {item.quantity}
        </p> */}
        <div>
          <span className="item-price-qty">
            {item.productName}
          </span>
          <span className="item-price-qty">
            € {item.price}
          </span>
          <span className="item-price-qty">
            x {item.quantity}
          </span>
        </div>
        <div>
          <span>
            <button onClick={() => removeOne(item)}>Remove One</button>
            <button onClick={() => removeAll(item)}>Remove All</button>
          </span>
        </div>
      </li>
    );
  }
}
// step 2
const mapStoreToProps = (store) => ({});
const mapActionsToProps = {
  removeOne,
  removeAll,
};

export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCartItem);
