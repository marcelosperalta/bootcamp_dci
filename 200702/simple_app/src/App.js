import React, { Component, Fragment } from "react";

import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Redux Simple App</h1>
          <ParentComponent />
        </div>
      </Fragment>
    );
  }
}

export default App;
