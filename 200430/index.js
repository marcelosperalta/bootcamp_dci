// Principles:
// DRY   - Don't Repeat Yourself    - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
// KISS  - Keep It Stupid Simple    - https://en.wikipedia.org/wiki/KISS_principle
// YAGNI - You aren't gonna need it - https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it

// Event Bubbling

// food list
const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        let li = e.target.parentElement;
        console.log(li);
        list.removeChild(li);
    }
    // alert("Hi");
});
//


// const del = document.querySelector(".delete");
// del.addEventListener("click", function () {
//     event.stopPropagation();
//     console.log("Nice ");
// });


// checkbox hide
const hide = document.querySelector("#hide");
hide.addEventListener("change", function () {
    if (hide.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
});
//


// classList.contains