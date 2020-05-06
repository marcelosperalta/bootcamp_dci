// Principles:
// DRY   - Don't Repeat Yourself    - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
// KISS  - Keep It Stupid Simple    - https://en.wikipedia.org/wiki/KISS_principle
// YAGNI - You aren't gonna need it - https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it

// JavaScript Object x JSON Object:
//
// JavaScript
// const obj = {
//      id: 1,
//      name: "Hadi",
//      age: 30
// }
//
// JSON
// [
//      {
//          "id": 1,
//          "name": "Hadi",
//          "age": 30
//      }
// ]

// Fetch Text
const fetchTextFile = () => {
    fetch("../plain.txt")
        // .then((response) => console.log(response))
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            document.querySelector(".result").innerHTML = data;
        })
        .catch((error) => console.log(error));
};

// Fetch JSON
const fetchJsonFile = () => {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let userCard = "<h2> All Users </h2>";
            data.forEach((user) => {
                userCard += `
                            <div class='card' id=${user.id}>
                            <div class='avatar'> ${user.photo}</div>
                            ${user.name}, <span> ${user.age} </span> old,
                            <br> 
                            and lives in <span> ${user.city}</span>
                            </div>
                            <br>
                            `;
            });
            document.querySelector(".result").innerHTML = userCard;
        });
};

// Fetch API
// https://jsonplaceholder.typicode.com/
const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let imgCard = "<h2> Images </h2>"
        data.forEach((img) => {
            imgCard += `
                        <div id=${img.id}>
                            <img src=${img.thumbnailUrl} alt=${img.title}>
                            <h3> ${img.title} </h3>
                            <img src=${img.url} alt=${img.title}>
                            <br>
                            <br>
                            <br>
                        </div>
                        `;
        });
        document.querySelector(".result").innerHTML = imgCard;
    });
};