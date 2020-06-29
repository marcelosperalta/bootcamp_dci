import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Data from "./data.json";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import About from "./components/About";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Soon from "./components/Soon";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <h1>online store</h1>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        );
    }
}