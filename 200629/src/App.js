import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
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
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/product/:id"
                        component={({ match }) => (
                            <ProductInfo data={Data} id={match.params.id} />
                        )}
                    />
                    <Route
                        path="/product"
                        exact
                        component={() => <Product data={Data} />}
                    />

                    <Route path="/about" component={About} />
                    <Route path="/*" component={Soon} />
                </Switch>
            </Router>
        );
    }
}
// <Route path="/about" component={About}>
// <About name="Hadi" />
// </Route>