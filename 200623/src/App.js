import React from "react";
//import { render } from "react-dom";
// get our fontawesome imports
import { faHome, faAddressBook, faBacon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
        };
        this.text = "";
    }
    login = () => {
        this.setState({ userName: "Ali" });
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ userName: "Nancy" });
        }, 1000);
    }
    componentDidUpdate() {
        this.text = "I run after the update has been rendered in the DOM";
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    Font Awesome Icons:
                    <br></br>
                    <FontAwesomeIcon icon={faHome} />
                    <span> </span>
                    <FontAwesomeIcon icon={faAddressBook} />
                    <span> </span>
                    <FontAwesomeIcon icon={faBacon} />
                </div>
                <h1>Hey {this.state.userName}, I am a React App</h1>
                <button onClick={this.login}>Login</button>
                <h4>{this.text}</h4>
            </React.Fragment>
        );
    }
}

// // create our App
// const App = () => (
//     <div>
//         <FontAwesomeIcon icon={faHome} />
//     </div>
// );

// // render to #root
// render(<App />, document.getElementById("root"));

// export default App;