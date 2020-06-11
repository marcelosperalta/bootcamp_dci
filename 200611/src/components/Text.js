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
export default class Text extends React.Component {
    render() {
        return (
            <h1>
                {" "}
                Hey, I am {this.props.name}, and I am {this.props.age}
            </h1>
        );
    }
}
// export default Text;