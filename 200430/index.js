// Event Bubbling


const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        let li = e.target.parentElement;
        console.log(li);
        list.removeChild(li);
    }
    // alert("Hi");
});

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