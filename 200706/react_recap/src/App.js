import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "Hi",
      userNum: 202,
      names: ["Ali", "Nancy", "Zain"],
    };
  }
  changeHandle = (e) => {
    const userText = e.target.value.trim();
    console.log(userText);
    this.setState({
      userInput: userText,
    });
  };
  submitHandle = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Router>
        <Menu />
        <h1>Hi, I am React 101</h1>
        {`${this.state.userInput} 
          ${this.state.userNum}`}
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandle}
          />
          <button onClick={() => console.log("I am click")}> click me</button>
        </form>
        <Switch>
          <Route path="/home" render={Home}>
            <Home namesArr={this.state.names} />
          </Route>
          <Route path="/about" exact render={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
// <Home info="Hadi" namesArr={this.state.names} />
