
// header with JavaScript
document.querySelector(".hey").innerText = `Welcome to "Weekend Countdown App"`;
// or
// document.querySelector("h2").innerText = `Welcome to "Weekend Countdown App"`;
//


// body style with JavaScript
document.querySelector("body").style.textAlign = "center";
//


// button
let checkBtn = document.querySelector("#check");
let date = new Date();
const getDayName = () => {
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};
const weekend = () => {
  let userName = document.querySelector("#userName");
  let result = document.querySelector(".result");
  result.innerHTML = `<br> Hey ${userName.value}, Today is ${getDayName()}. <br><br> ${
    5 - date.getDay()
  } days left till weekend.`;
  console.log(getDayName());
};
checkBtn.addEventListener("click", weekend);
//