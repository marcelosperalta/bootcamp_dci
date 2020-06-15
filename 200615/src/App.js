import React from "react";
// import React, { Component } from "react";
// export default class App extends Component {
import List from "./components/List";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hi, I am a React App</h1>
                <List />
            </React.Fragment>
        );
    }
}