import React from "react";

const App = () => {
    return (
        <div>
            <h1>Translate to Morse</h1>

            <div className="text">
                <label
                    for="story">
                    Input Message:
                </label>
                <textarea
                    id="story"
                    name="story"
                    rows="5"
                    cols="33">
                </textarea>
            </div>
            <br></br>
            <div className="text">
                <label
                    for="story">
                    Output Message:
                </label>
                <textarea
                    id="story"
                    name="story"
                    rows="5"
                    cols="33">
                </textarea>
            </div>
        </div>
    );
};

export default App;