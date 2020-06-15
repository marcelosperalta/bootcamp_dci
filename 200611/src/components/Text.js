import React from "react";

// function component:
// const Text = (props) => {
//   return (
//     <React.Fragment>
//       {console.log(props)}
//       <h5>
//         Hi I am {props.name}, and I am {props.age}
//       </h5>
//     </React.Fragment>
//   );
// };
// export default Text;

// class component:
// export default class Text extends React.Component {
//     render() {
//         return (
//             <h1>
//                 {" "}
//                 Hey, I am {this.props.name}, and I am {this.props.age}
//             </h1>
//         );
//     }
// }

class Text extends React.Component {
    render() {
        return (
            <h1>
                {" "}
                Hey, I am {this.props.name}, and I am {this.props.age}
            </h1>
        );
    }
}
class Hello extends React.Component {
    render() {
        return (
            <h1>
                {" "}
                Hey, I like React
            </h1>

        );
    }
}

class Todolist extends React.Component {
    create = () => {
        let newElement = document.createElement("div");
        let newText = document.createTextNode("I am a new element");
        newElement.appendChild(newText);
        document.body.appendChild(newElement);
    };
    addToList = () => {
        let userInput = document.querySelector("#userText").value;
        console.log(userInput);
        let newLi = document.createElement("li");
        let text = document.createTextNode(userInput);
        newLi.appendChild(text);
        document.querySelector(".result").appendChild(newLi);
        document.querySelector("#userText").value = "";
    };
    render() {
        return (
            <div>
                <input type="text" name="userData" id="userText" />
                <button onClick={addToList}>ADD</button>
                <ol class="result"></ol>
            </div>
        );
    }
}
export { Text, Hello, Todolist }

{/* <button onClick={this.create()}>create new</button>
 */}