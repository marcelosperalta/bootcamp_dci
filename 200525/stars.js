// Exercise:

// Create a program that prints headers to the terminal.
// - This program should accept 2 arguments. 
//      > The first argument should be the number of stars to print before and after the header. 
//      > The second argument should be the word to print inside the header.
// - If no stars or no header are passed to the function, 
//   the function should print out 10 stars and the word "Hi" to the console by default.

// Teacher's solution:
// exported to "index.js"
module.exports = (stars = 10, header = "Hi") => {
    console.log(`${'*'.repeat(stars)}\n ${header}\n${'*'.repeat(stars)}`)
};