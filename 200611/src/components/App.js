import React from "react";
import Text from "./Text";
const App = () => {
    return (
        <React.Fragment>
            <h1>Hi, I am react</h1>
            <Text name="Marcelo" age="39" />
            <Text name="Ali" age="22" />
            <Text name="Zain" />
            <Text name="Nancy" />
            {
                // I am a comment
                // When we have to write JavaScript in React (JSX) we need to put the code between curly braces "{}"
            }
        </React.Fragment>
    );
};

export default App;