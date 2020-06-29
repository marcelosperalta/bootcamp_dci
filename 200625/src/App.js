import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            data: Data,
            filteredData: [],
        };
    }
    changeHandle = (e) => {
        this.setState({
            userInput: e.target.value.trim(),
        });
    };

    submitHandle = (e) => {
        e.preventDefault();
        const userText = this.state.userInput.toLocaleLowerCase();
        let newArr = this.state.data.filter(
            (item) => item.productName === userText
        );
        this.setState({
            filteredData: newArr,
        });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to our online store</h1>
                <form className="filter" onSubmit={this.submitHandle}>
                    <input
                        className="input"
                        type="text"
                        onChange={this.changeHandle}
                        value={this.state.userInput}
                    />
                    <input type="submit" value="filter" />
                </form>
                <ProductList
                    data={
                        this.state.userInput ? this.state.filteredData : this.state.data
                    }
                />
            </React.Fragment>
        );
    }
}


// import React, { Component } from "react";
// import Data from "./data.json";
// import ProductList from "./components/ProductList";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: "",
//       data: Data,
//       filteredData: [],
//     };
//   }
//   changeHandle = (e) => {
//     this.setState({
//       userInput: e.target.value.trim(),
//     });
//     const userText = this.state.userInput.toLowerCase();
//     let newArr = this.state.data.filter(
//       (item) => item.productName === userText
//     );
//     this.state.userInput === ""
//       ? this.setState({ filteredData: [] })
//       : this.setState({ filteredData: newArr });
//   };

//   submitHandle = (e) => {
//     e.preventDefault();
//     const userText = this.state.userInput.toLocaleLowerCase();
//     const userTextLength = userText.length;

//     const searchText = userText ? userText : "";
//     let newArr = this.state.data.filter((item) => {
//       const enteredText = item.productName.slice(0, userTextLength);
//       return enteredText === searchText;
//     });
//     this.setState({
//       filteredData: newArr,
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Welcome to our online store</h1>
//         <form onSubmit={this.submitHandle}>
//           <input
//             type="text"
//             onChange={this.changeHandle}
//             value={this.state.userInput}
//           />
//           <input type="submit" value="filter" />
//         </form>
//         <ProductList
//           data={
//             this.state.userInput ? this.state.filteredData : this.state.data
//           }
//         />
//       </React.Fragment>
//     );
//   }
// }