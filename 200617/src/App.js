import React, { Component } from "react";
//import  {}  from "./helpers";
import Menu from "./components/Menu";
import Data from "./data.json";
import Motor from "./imgInSrc/img1.png";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            userName: "Hadi",
            result: ""

        };
        this.handleChange = (event) => {
            this.setState({
                userInput: event.target.value,
            });
        };
        this.validate = (email) => {
            const regex = /^[A-Za-z\.\-\_]+@\w+\.[A-Za-z]{1,6}$/;
            return regex.test(email);
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            const entry = this.state.userInput;
            this.setState({
                result: this.validate(entry) ? "valid" : "invalid",
            });
        };
        this.change = (e) => {
            e.preventDefault();
            this.setState({
                userName: "Ali",
            });
        };
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hi, I am React</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Check" />
                </form>
                <div>Your Email is {this.state.result}</div>
                <Menu propsName="Tequila" info={Data} />
                <form onSubmit={this.change}>
                    <h1>Hi, I am {this.state.userName}</h1>
                    <input type="submit" />
                    <br></br>
                    <br></br>
                    <img className="imginsrc" src={Motor} alt="Hi" />
                </form>
            </React.Fragment>
        );
    }
}