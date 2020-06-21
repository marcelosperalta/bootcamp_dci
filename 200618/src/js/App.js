import React from "react";

const dictionary = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ","
};

const outputMessage = () => {
    var output = document.getElementById('output');
    var input = document.getElementById('input');
    var result = "";
    for (let index = 0; index < input.value.length; index++) {
        result += Object.keys(dictionary).find(element => dictionary[element] === input.value.toLowerCase()[index]) + "  ";
    }
    output.placeholder = result;
};


const App = () => {
    return (
        <div>
            <h1>Translate to Morse</h1>

            {/* Input Message*/}
            <div className="text">
                <label>
                    Input Message:
                </label>
                <textarea
                    id="input"
                    rows="5"
                    cols="33"
                    onInput={outputMessage}>
                </textarea>
            </div>

            <br></br>

            {/* Output Message*/}
            <div className="text">
                <label>
                    Output Message:
                </label>
                <textarea
                    id="output"
                    rows="5"
                    cols="33">
                </textarea>
            </div>
        </div>
    );
};

export default App;