import React from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
//import axios from "axios"; if you would like to use it 💪🏻

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            loading: true,
        };
        this.handleChange = (e) => {
            this.setState({
                userInput: e.target.value.trim(),
            });
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    // fetch result
    // let { name, capital, topLevelDomain, timezones, languages } = item;
    // this.setState({
    //   name,
    //   capital,
    //   topLevelDomain,
    //   timezones,
    //   languages,
    //   loading: false,
    // });

    render() {
        if (this.state.loading) return <Loading />;
        return (
            <React.Fragment>
                <h1>Country App</h1>

                <Country data="sendSomething" />
            </React.Fragment>
        );
    }
}