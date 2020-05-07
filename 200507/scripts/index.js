// Principles:
// DRY   - Don't Repeat Yourself    - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
// KISS  - Keep It Stupid Simple    - https://en.wikipedia.org/wiki/KISS_principle
// YAGNI - You aren't gonna need it - https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it

//console.log("Hi I am light code");

// Promise
const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = true;
  if (hasDog) {
    resolve({
      status: "User is cool",
      emoji: "😎",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy",
      emoji: "😅",
    });
  } else {
    reject({
      status: "User is alone",
      emoji: "🥺",
    });
  }
});
userStatus
  .then((obj) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${obj.status} and he/she is ${obj.emoji}`;
  })
  .catch((err) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
});

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log("User data being loaded");
    if (userName == "Ali") {
      resolve("Welcome back 😊");
    } else {
      reject("sorry IDK you");
    }
  });
}
  
function secondStep(response) {
  return new Promise((resolve) => {
    console.log("Still loading");
    resolve(`We have been waiting for you ${response}`);
  });
}
// stepOne("Hadi")
//   .then((response) => {
//     console.log("response just arrive");
//     return secondStep(response);
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   })
//   .catch((err) => console.log(err));


// Async Await
async function startSomething() {
  try {
    const response = await stepOne("Hadi");
    console.log("response just arrive");
    const secondResponse = await secondStep(response);
    console.log(secondResponse);
  } catch (err) {
    console.log(err);
  }
}
startSomething();