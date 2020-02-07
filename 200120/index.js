// array [ 0 , 1 , 2 ... ]

let arrStr = ["hi", "xxx", "yyy"]; // 1st way
console.log(arrStr);
let arrInt;

arrInt = [];                       // 2nd way
console.log(arrInt);               // empty array
arrInt[0] = 22;
arrInt[1] = 22;
console.log(arrInt);               // [ 22, 22 ]

// Array(num)
let arrString = new Array(4);
let arrStr2 = Array ("Hadi", "Ali")
console.log(arrStr2);              // [ 'Hadi', 'Ali' ]

//Array.of()
let strArr = Array.of(3);
console.log(strArr);               // [ 3 ]

// Accessing using square brackets
arrInt[2] = 33;
arrInt[3] = 53;
console.log(arrInt);

arrInt.push(633);
arrInt.push(222);     // add the "222" to the last array slot
console.log(arrInt);

arrInt.unshift(322);  // add the "322" to the first array slot
console.log(arrInt);
console.log(typeof arrInt);

// Array.indexOf(<item>)
var firstNameArr = ["Ali", "Olga", "Hadi"]; // index number = [ 0 , 1 , 2 ]
console.log(firstNameArr.indexOf("Nancy")); // result = -1 > the item do not exist
console.log(firstNameArr.indexOf("Ali"));   // result =  0
let funArr = ["😎","💪🏻","😊"];
console.log(funArr);

let arrStringName = [];
for (let i = 0; i <= 10; i++){       //      i = 0        ,      i = 1
    arrStringName[i] = `Hadi ${i}`;  // arr[0] = `Hadi 0` , arr[1] = `Hadi 1`
}
console.log(arrStringName);

let arrStringName2 = [];
for (let i = 2; i <= 10; i++){       //      i = 2        ,      i = 3
    arrStringName2[i] = `Hadi ${i}`; // arr[2] = `Hadi 2` , arr[1] = `Hadi 3`
}
console.log(arrStringName2);         // 2 empty items

//Array.pop()
funArr = ["😎","💪🏻","😊"];
console.log(funArr);
funArr.pop()                         // remove the last slot "😊"
console.log(funArr);
//Array.shift()
funArr.shift()                       // remove the first slot "😎"
console.log(funArr);

const lastName = [];             
lastName [0] = `Nsreeny`;            // fill the array
lastName [1] = `Dany`;               // fill the array
console.log(lastName);
// lastName = 0; do not work because we can not change a "const"

// multiple things, use variable name in the plural
let names = ["Hadi", "Ali", "Nancy", "Dany"]; // array 
let name = `This is long text
new line
second line`;                                 // string
console.log(names.length);                    // index of the array
console.log(name.length);                     // jam
// Array.slice()
console.log(names.slice(3));
console.log(names.splice(0, 2));
console.log(names[0].substring(0, 2));
// Array.split()
let stringToArray = name.split(" ");
console.log(stringToArray);


// exercises

// --------------------------------------------------------------------------------
// 20.01.2020 - 01
// Declare a variable named “euroCities”
// and assign an array to the variable e.g.
// [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
// Declare another variable and
// assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
let euroCity = euroCities[1];
console.log(euroCity);

// --------------------------------------------------------------------------------
// 20.01.2020 - 02
// Change the first item in the array to “Berlin”.
// *change = new assignment

euroCities[0] = `Berlin`;
console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 03
// Print the length of the array “euroCities”.

console.log(euroCities.length);

// --------------------------------------------------------------------------------
// 20.01.2020 - 04
// Remove the last item of the array “euroCities”.

euroCities.pop()
console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 05
// Use an array method to add “Budapest” to the euroCities array.

euroCity = "Budapest";
euroCities.push(euroCity);
console.log(euroCities);
//or
//euroCities.push("Budapest");
//console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 06
// Create another variable named asianCities
// and assign an array of at least 5 cities to the variable.

const asianCities = ["Tokyo", "Jakarta", "Delhi", "Karachi", "Seoul"];
//                      0        1          2        3           4
// human language       1        2          3        4           5
console.log(asianCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 07
// Use an array method to select items 2-4 (human language) from the array of asianCities
// and store this in another variable.

let newArray = asianCities.splice(1, 3);
console.log(newArray); // [ "Jakarta", "Delhi", "Karachi" ]


// Array.join()
const arrayString2 = ["This", "is", "array", "was", "string"]
let stringToArr = arrayString2.join(" ");
console.log(stringToArr);


// homework

// --------------------------------------------------------------------------------
// 20.01.2020 - 08
// sumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.

let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i < intArr.length; i++){
    result += intArr[i];
    product *= intArr[i];
}
console.log(`The sum for your Array is ${result}, The product of your Array is ${product}`);

// --------------------------------------------------------------------------------
// 20.01.2020 - 09
// Hello Friend Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend
// e.g. Hello Maria! Hello Mike! etc.
// Bonus: Print the indexes of each item in the array.
// Expected output example: Mike is at index 1 of my friends array.

const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++){ //or "for (let i = 0; i <= names2.length -1; i++){"
    console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}

// --------------------------------------------------------------------------------
// 20.01.2020 - 10
// City Names.
// Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: Berlin, Paris, Prague, Rome.

const cityNames = ["Berlin", "Paris", "Miami", "Dubai"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++){
    cityNamesStr += cityNames[i];
    if (i == cityNames.length -1){
        cityNamesStr += "."
    } else {
        cityNamesStr += ", "
    }
}
console.log(cityNamesStr);

// --------------------------------------------------------------------------------
// 20.01.2020 - 11
// Odds and Evens.
// Create a program that changes a given array by adding
// 1 to each odd integer and subtracting 1 from each even integer.
// Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

// --------------------------------------------------------------------------------
// 20.01.2020 - 12
// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names.
// Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

const arrNames = ["sAra", "alI", "nanCy"];
for (let i = 0; i < arrNames.length; i++){
    arrNames[i] = arrNames[i][0].toUpperCase() + arrNames[i].substring(1).toLowerCase();
    // arrNames [i][0] = "sara"
}
console.log(arrNames);