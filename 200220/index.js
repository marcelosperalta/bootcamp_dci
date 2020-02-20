
// ...continue exercise from 18.02.2020

// Exercise

// --------------------------------------------------------------------------------
// 18.02.2020 - 01
// Number three:
// Find 3 exercises that you have did in 3 ways,
// or do 3 exercises in 3 ways if you haven’t did that yet
// Create 3 repository’s (each exercise get one repo).
// Add 3 branches in every repo (each branch has a different solution).

// Upload 3 photos (one photo to each branch) to your README.md showing your code
// and the console part, explain your steps and links to your resources (mdn or so).

// e.g.: https://github.com/duxianwei520/react

// GitHub: "18.02.2020 - One exercise in 3 ways with 3 branches"
// GitHub branches: master, dev1, dev2

console.log(`
ver. "master":`);

function longestWord(longString) {
    let strArray = longString.split(' ');
    let result;
    for (i = 0 ; i < strArray.length - 1; i ++) {
        if(strArray[i].length > strArray[i + 1].length) {
            result = strArray[i]
        } else {
            result = strArray[i + 1]
        }
    }
    return console.log(result);      // result: development
}
longestWord("this is a web development course");

console.log(`
ver. "dev1":`);

function longestWord2(str) {
    let words = str.split(' ');
    let longestWord = '';
    for(let word of words) {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return console.log(longestWord); // return: development
}
longestWord2("this is a web development course");

console.log(`
ver. "dev2":`);

function longestWord3(str) {
    let words = str.split(' ');
    let longestWord = "";
    words.forEach(function(word) {
      if (word.length > longestWord.length) {
        longestWord = word;   
      }
    })
    return console.log(longestWord); // return: development
}
longestWord3("this is a web development course");