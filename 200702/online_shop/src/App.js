import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          <h1>online store</h1>
          <Switch>
            {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> */}
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/product" exact component={ProductList} />
            <Route path="/cart" exact component={ShoppingCart} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
