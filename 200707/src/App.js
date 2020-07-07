import React, { Component } from "react";
import { DataProvider } from "./context/DataContext";
import Info from "./components/Info";

class App extends Component {
  render() {
    return (
      <DataProvider>
        <h1>Hey, I am React Context API</h1>
        <Info />
      </DataProvider>
    );
  }
}

export default App;
