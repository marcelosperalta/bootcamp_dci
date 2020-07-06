import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  render() {
    const { store, changeName } = this.props;
    //console.log(store);

    return (
      <Fragment>
        <h4>Hey, {store.userName}</h4>
        <button onClick={() => changeName("Ali")}>Change the name</button>
        <ChildComponent store={store} propsName="Nancy" />
      </Fragment>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps = {
  changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
