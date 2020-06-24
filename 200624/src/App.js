import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="h1">Welcome to our online store</h1>
                <ProductList data={Data} />
            </React.Fragment>
        );
    }
}