// Principles:
// DRY   - Don't Repeat Yourself    - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
// KISS  - Keep It Stupid Simple    - https://en.wikipedia.org/wiki/KISS_principle
// YAGNI - You aren't gonna need it - https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it


// "Let's make hot chocolate"

// Callback version
function prepareHotChocolate(callback) {
    // first step
    setTimeout(() => {
        let milk = "boiled";
        // one milk boiled start next step
        callback(milk, callback2);
    }, 2000);
}
function callback(milk, callback2) {
    if (milk == "boiled") {
        let chocolate = "added";
        // one chocolate added start next step
        callback2(chocolate, callback3);
    }
}
function callback2(chocolate, callback3) {
    if (chocolate == "added") {
        let marshmallow = "added";
        // one marshmallow added start next step
        callback3(marshmallow);
    }
}

function callback3(marshmallow) {
    if (marshmallow == "added") {
        console.log("Cool, your drink is ready!");
        let newContent = "";
        addElement(newContent);
    }
}
function addElement(newContent) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Cool, your drink is ready!");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv)
}

// calling the function
prepareHotChocolate(callback);




// async function version



// Promise version