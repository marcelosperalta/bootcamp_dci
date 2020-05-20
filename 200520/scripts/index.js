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
// async function prepareHotChocolateAsync() {
//     try {
//         const response = await prepareHotChocolate(callback);
//     } catch (err) {
//         console.log(err);
//     }
// }
// prepareHotChocolateAsync()


// async function version // Promise version
function milkCheck(response) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (response == "heated") {
                resolve("your milk is hot now add chocolate");
            }
        }, 3000);
    });
}
function chocolateCheck(response) {
    return new Promise((resolve) => {
        resolve(` ${response} now add marshmallow`);
    });
}
function marshmallowCheck(response) {
    return new Promise((resolve) => {
        resolve(` ${response} now your drink is ready`);
    });
}
function addElement2(newContent2) {
    var newDiv = document.createElement("div");
    var newContent2 = document.createTextNode("Cool, your drink is ready! (async function)");
    newDiv.appendChild(newContent2);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv)
}
async function prepareHotCocoa() {
    const step1 = await milkCheck("heated"); // Starts here < < < < <
    console.log(step1);
    const step2 = await chocolateCheck(step1);
    console.log(step2);
    const step3 = await marshmallowCheck(step2);
    console.log(step3);
    addElement2()
}
prepareHotCocoa();