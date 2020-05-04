// Principles:
// DRY   - Don't Repeat Yourself    - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
// KISS  - Keep It Stupid Simple    - https://en.wikipedia.org/wiki/KISS_principle
// YAGNI - You aren't gonna need it - https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it

// defer attribute
// tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.
// https://javascript.info/script-async-defer#defer

// JavaScript Object Notation (JSON)
// It's a file format, and data interchange format, that uses human-readable text to store and transmit data objects
// https://docs.npmjs.com/creating-a-package-json-file

// Module Basics:
//  Using modules in the browser: <script type="module" src="...">
// Connecting files: The `import` and `export` keywords


import { data } from "./data.js";

let parsedData = JSON.parse(data);
console.log(parsedData);
const section = document.querySelector("#bread");
parsedData.forEach((obj) => {
  console.log(obj);
  let { id, title, ingredients, image } = obj;
  //console.log(id);
  let card = `
              <div id=${id}>
              <h2> ${title} </h2>
              <img src=${image} alt=${title}>
              <h6> ${ingredients} </h6>
              <br>
              <br>
              </div>
              `;
  section.innerHTML += card;
});