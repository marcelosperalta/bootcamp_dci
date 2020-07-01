import React, { Component } from "react";

import ProductList from "./components/ProductList";
//import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductList />
            </React.Fragment>
        );
    }
}

export default App;