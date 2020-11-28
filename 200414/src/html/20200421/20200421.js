// DCI class 21.04.2020


// Zoom link always is
// https://zoom.us/j/3551491935
// Or you can join using ID
// Meeting ID: 355 149 1935

// where I can link my js file

// GitHub assignment push


// window.alert === alert

// -Node-
// In the context of the DOM, a node is a single point in the node tree. 
// Various things that are nodes are the document itself, elements, text, 
// and comments.

// -NodeList-
// NodeList objects are collections of nodes, 
// usually returned by properties such as Node.childNodes 
// and methods such as document.querySelectorAll().

// document.querySelectorAll() will return A non-live NodeList 🧐

// Node tree
// https://dom.spec.whatwg.org/#concept-node

//class img
let avatar = document.querySelector(".img");
console.log(avatar);
//avatar.innerHTML = "cool";
// let list = avatar.querySelectorAll("span");
// div.img
let list = document.querySelectorAll(".img span");
console.log(list);
list.forEach((item) => {
  console.log(item);
  item.innerText = "nice";
  item.style.backgroundColor = "red";
});
console.log(list.length);
list[2].style.color = "blue";

// id menuList
let navList = document.querySelector("#menuList");
console.log(navList);
// > + ~
let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = "Nice one";

// class main
let moreClass = document.querySelector(".main");
moreClass.classList.add("small");
moreClass.classList.add("textRtl", "flexSize");
moreClass.classList.remove("textRtl");
let classArr = ["classOne", "classTwo"];
// adding more classes to the div using ...
moreClass.classList.add(...classArr);
console.log(moreClass.classList);
moreClass.style.color = "blue";
moreClass.style.backgroundColor = "gray";
moreClass.style.fontSize = "1.5rem";
// font-size in js fontSize
moreClass.style.marginLeft = "1rem";
moreClass.style.display = "flex";
moreClass.style.justifyContent = "center";
moreClass.style.width = "70%";

function newContent() {
    document.open();
    document.write("<h1>Cool, this is me 😎</h1><div>");
    document.write("Hi, I am Hadi");
    document.write(`<br><br><a href="../20200421/20200421.html">Return</a>`);
    document.close();
}
