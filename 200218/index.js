
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


// 3. Word Converter
// Given an array of words, create a function named "_wordConverter_"
// which uses an array method to add _"er"_ to the end of each string in the array.
// Look at the expected output below.
// **Important**: Do **not** use a loop to complete this task.
// Print your solution to the console.

// **Array of words**
// 
// ```javascript
// ["smart", "kind", "sweet", "small", "clear"];
// ```
// 
// **Expected output**
// 
// ```javascript
// ["smarter", "kinder", "sweeter", "smaller", "clearer"];

console.log(`
Arrays - Word Converter - ver. "master":`);

function wordConverter() {
    let arr = ["smart", "kind", "sweet", "small", "clear"];
    const map1 = arr.map(x => x + "er");
    return console.log(map1);
}
wordConverter(); // result: [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]

console.log(`
Arrays - Word Converter - ver. "dev1":`);

function wordConverter2() {
    let arr = ["smart", "kind", "sweet", "small", "clear"];
    //console.log(arr);
    for (let i = 0; i < arr.length; i++){
         arr[i] = arr[i] + "er";
    }
    return console.log(arr);
}
wordConverter2();

console.log(`
Arrays - Word Converter - ver. "dev2":`);

function wordConverter3() {
    let arr = ["smart", "kind", "sweet", "small", "clear"];
    let newArr =  arr.slice(arr.length -1);
    //console.log(newArr);        // result: [ 'clear' ]
    let er = "er";
    let newStrClearer = newArr + er;
    //console.log(newStrClearer); // result: [ 'clearer' ]
    let last = arr.pop()
    //console.log(last);          // result: clear
    //console.log(arr);           // result: [ 'smart', 'kind', 'sweet', 'small' ]
    let newLength = arr.push(newStrClearer);
    //console.log(arr);           // result: [ 'smart', 'kind', 'sweet', 'small', 'clearer' ]
    let newArr2 = arr.join("er ").split(" ");
    return console.log(newArr2);
}
wordConverter3();                 // result: [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
