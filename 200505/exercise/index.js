
// Shows the "Modal" section (see index.html) after 60 seconds
//.setTimeout()
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
window.setTimeout(() => {
    // alert("Hi");
}, 10000);
function modal(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// Convert Seconds to Milliseconds
// https://www.calculateme.com/time/seconds/to-milliseconds/
// let ms = 60000; // = 60 seconds
let ms = 2000; // = 2 seconds
modal(ms).then(myFunction);
function myFunction() {
let text = document.querySelector(".modal");
  text.style.display = "block";
}


// Close the "Modal" section (see index.html) using the "X" mark and start to counting more 60 seconds:
document.getElementById('close').onclick = function closeModal() {
  document.getElementById('myModal').style.display = "none";
  modal(ms).then(myFunction);
}