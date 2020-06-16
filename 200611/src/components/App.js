// import React, { Component } from "react";
// import Text from "./Text";
import React from "react";
import { Text, Hello } from "./Text";

const userLogin = true;
const names = ["Ali", "Hadi", "Nancy", "Zain"];

const App = () => {
    const NamesList = names.map((name, index) => <li key={index}>{name}</li>);
    return (
        <React.Fragment>
            <h1>Hi, I am react</h1>
            <Text name={userLogin ? "Marcelo" : "IKD"} age="39" />
            <Hello />
            List of names:
            <ul>
                {NamesList}
            </ul>
            {
                // I am a comment

                /*
                  I am a comment
                */

                /*
                <Text name="Ali" age="22" />
                <Text name="Zain" />
                <Text name="Nancy" />
                <h1>{userLogin ? "Hi Hadi" : "Login please"}</h1>
                */

                // When we have to write JavaScript in React (JSX) we need to put the code between curly braces "{}"
            }
        </React.Fragment>
    );
};
export default App;