import React, { Component, Fragment } from "react";
import { increment, decrement } from "../actions";
import { connect } from "react-redux";
class ChildComponent extends Component {
  render() {
    const { store, increment, decrement } = this.props;
    console.log(this.props);

    //console.log(store);

    return (
      <Fragment>
        {/* <hr></hr> */}
        <br></br>
        <button onClick={() => increment()}>+</button>
        {store.counter}
        <button onClick={() => decrement()}>-</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => { };
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent);
