import React from "react";
import { display, add } from "./helpers";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // display("Hadi");
        // bind function
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    print = () => {
        console.log("I am function with out this and don't need to bind");
    };
    // function needed to be bind
    handleSubmit() {
        console.log("Hi I come from bind");
    }
    render() {
        // this in render
        this.newUser = () => {
            console.log("I am function been built in render");
        };
        return (
            <React.Fragment>
                <h1 className="container">Hi I am React</h1>
                {
                    // <List fun={this.add}></List>
                    this.newUser()
                }
                {this.handleSubmit()}
                {add(3, 5)}
            </React.Fragment>
        );
    }
}