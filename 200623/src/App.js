import React from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            data: [],
            loading: true,
        };
    }
    changeHandler = (e) => {
        this.setState({
            userInput: e.target.value.trim(),
        });
    };
    submitHandler = (e) => {
        e.preventDefault();
        let textToUrl = encodeURIComponent(this.state.userInput);
        let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
        // fetch(endPoint)
        //   .then((res) => res.json())
        //   .then((data) => this.setState({ data }));

        axios(endPoint).then((res) => {
            const { data } = res;
            this.setState({ data });
        });
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1000);
    }
    render() {
        if (this.state.loading) return <Loading />;
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            value={this.state.userInput}
                            onChange={this.changeHandler}
                            placeholder="Write a country name"
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <Country data={this.state.data} />
            </React.Fragment>
        );
    }
}