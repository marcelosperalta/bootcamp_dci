import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// 4. step creating the store
// store aka global state
import { createStore } from "redux";
// importing all the reducers
import allReducers from "./reducers";
// importing the Provider that provide the store to this app
import { Provider } from "react-redux";
// 5. step
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// 6. step
// wrapping the Provider into App to be able to access the store from any component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);