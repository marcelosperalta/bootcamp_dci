function newUser (fName, lName, age, hope) {  // outer function
    let result = {
        firstName: fName,
        lastName: lName,
        old: age,
        funThingsToDo: hope,
        printOut: function () {               // inner function as method
            return ` Hey ${this.firstName}, you are very old ${this.old} `;
        // or            ${result.firstName}
        }
    };
//  console.log(result.printOut());
//  return result.printOut();
    return result;                            // this is inner function call
}
// this is function call:
console.log(newUser('Ali','st', 22, 'dance'));
console.log(newUser('Olga','st', 22, ['a', 'b']));
console.log(newUser('A','st', 22, {'dance': 'two'}));
console.log(`
`);

let x = newUser('Ali','st', 22, 'dance');
console.log("this is x:");
console.log(x);
console.log(x.old);
console.log(x.firstName);
console.log(`
`);

// array
let arr = [2, {name: "Ali", age: 22}, 6];
console.log(arr[1].age);
console.log(arr[1].age);
console.log(`
`);

let arr2 = [2, {1: "Ali", 2: 22}, 6];
console.log(arr2[1][2]);
console.log(`
`);

let arr3 = [
    {1: "Ali", age: 22},
    {1: "Olga", age: 30},
    {
        1: "Olga",
        sum: function() {
        return " Hi";
    }
  }
];
console.log(arr3[2].sum());
// or
console.log(arr3[2]['sum']());

console.log(`
`);

let arr4 = console.log([3,4,5].indexOf(4));                // expect output:  1
let arr5 = console.log([3,4,5][1]);                        // expect output:  4
let arr6 = console.log([3,4,5].indexOf('I do not exist')); // expect output: -1
let arr7 = console.log([3,4,5].find(e => e === 4));        // expect output:  4
let arr8 = console.log([3,4,5].findIndex(e => e === 4));   // expect output:  1
let arr9 = console.log([3,4,5].findIndex(num => num > 3)); // expect output:  1

let arr10 = [3,4,5];
console.log(arr10);                                        // expect output:  [ 3, 4, 5 ]
console.log(arr10.shift());                                // expect output:  3
console.log(arr10);                                        // expect output:  [ 4, 5 ]
console.log(arr10.unshift(1,2));                           // expect output:  4
console.log(arr10);                                        // expect output:  [ 1, 2, 4, 5 ]
console.log(arr10.pop());                                  // expect output:  5 
console.log(arr10);                                        // expect output:  [ 1, 2, 4 ]
console.log(arr10.push(3));                                // expect output:  4
console.log(arr10);                                        // expect output:  [ 1, 2, 4, 3 ]
console.log(arr10.reverse());                              // expect output:  [ 3, 4, 2, 1 ]
console.log(arr10);                                        // expect output:  [ 3, 4, 2, 1 ]

// is more clear when used ate google chrome web browser console
console.log(arr10.forEach(e => console.log(e)));           // expect output:  undefined

console.log(["Bird", "Dog", "Cat"].forEach(animal => console.log('My pet is:', animal)));
// expect output:
/*
My pet is: Bird
My pet is: Dog
My pet is: Cat
undefined
*/

console.log(arr10);                                        // expect output:  [ 3, 4, 2, 1 ]
console.log(arr10.map(e => e + 1));                        // expect output:  [ 4, 5, 3, 2 ]
console.log(arr10);                                        // expect output:  [ 3, 4, 2, 1 ]

const increasedArr = arr10.map(e => e + 1);
console.log(increasedArr);                                 // expect output:  [ 4, 5, 3, 2 ]
console.log(arr10);                                        // expect output:  [ 3, 4, 2, 1 ]

console.log(arr10.filter(e => e < 4));                     // expect output:  [ 3, 2, 1 ]
arr10.filter((value, index) => { console.log(value, "is at index", index); return true;})
arr10.filter((value, index) => { console.log(value, "is at index", index); })
arr10.filter((value, index) => {
    console.log(value, "is at index", index);
    return true;
})

console.log(arr10);                                                  // expect output:  [ 3, 4, 2, 1 ]
console.log(arr10.reduce((result, current) => result + current, 0)); // expect output:  10
console.log(arr10.reduce((result, current) => result + current));    // expect output:  10
console.log(arr10.reduce((result, current) => result + current, 2)); // expect output:  12

console.log(arr10);                                                  // expect output:  [ 3, 4, 2, 1 ]
console.log(arr10.reduce((result, current) => result.concat([current]), []));
                                                                     // expect output:  [ 3, 4, 2, 1 ]
console.log(arr10.reduce((result, current) => result.concat([current]), [1]));
                                                                     // expect output:  [ 1, 3, 4, 2, 1 ]

console.log(arr10);                                                  // expect output:  [ 3, 4, 2, 1 ]

arr10.reduce((result, current) => {
    console.log("sum so far", result);
    return result + current; }, 0)
// expect output:
/*
sum so far 0
sum so far 3
sum so far 7
sum so far 9
*/


// exercises

// --------------------------------------------------------------------------------
// 06.02.2020 - 01
// Which is the first animal with more than three letters?
// const animals = ["cat", "bird", "dog", "worm"]

const animals = ["cat", "bird", "dog", "worm"]
console.log(animals.find(e => e.length > 3));

// --------------------------------------------------------------------------------
// 06.02.2020 - 02
// Find all animals with more than three letters.
// const animals = ["cat", "bird", "dog", "worm"]

const animals2 = ["cat", "bird", "dog", "worm"]
console.log(animals2.filter(e => e.length > 3));

// --------------------------------------------------------------------------------
// 06.02.2020 - 03
// Switch Keys and Values.
// Create a function to get a copy of an object.
// The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

let person = {
    name: "Ali",
    job: "teacher"
};
function keysToValue (obj) {
    const keysValuesPair = Object.entries(obj);
    console.log(keysValuesPair);
    let reversArr = [];
    for (let i = 0; i < keysValuesPair.length; i++) {
        reversArr.push(keysValuesPair[i].reverse())
    }
    console.log(reversArr);
    console.log(Object.fromEntries(reversArr));
    return Object.fromEntries(reversArr);
}
console.log(keysToValue(person));