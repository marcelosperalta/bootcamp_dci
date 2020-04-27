// Traversing

//  Node vs Element Nodes

// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

//

// previousElementSibling and previousSibling
let ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
// console.log(ele.id);
let ele2 = document.querySelector("body").previousSibling;
console.log(ele2);

// firstChild
let mainText = document.getElementById("text").firstElementChild;
console.log(mainText.textContent);
// nodeName, nodeType, id, innerText
// textContent gets the content of all elements, including <script> and <style> elements. In contrast.

// closest
let text = document.querySelector("span");
let closestElement = text.closest(".cool");
console.log(closestElement);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  if (name.matches(".teacher")) {
    console.log(`${name.textContent} is the teacher for FBW26`);
  }
});

// children
let allChildren = document.querySelector("body").children;
console.log(allChildren);

// querySelector
let heading = document.querySelector("h1");
heading.style.backgroundColor = "red";

// lastElementChild
let menuList = document.getElementById("menu");
console.log(menuList.lastElementChild);

// function
let allComments = (element) => {
  let arr = [];
  for (let i = 0; i < element.childNodes.length; i++) {
    let node = element.childNodes[i];
    if (node.nodeType == 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, allComments(node));
    }
  }
  return arr;
};
console.log(allComments(document));