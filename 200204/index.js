// Array

let arr = [2, 3];
console.log(arr);

// Objects

// keys > properties: values
// keys have two items > properties and values
// keys are stored as individual "string"

const o = {
    1: 'Hadi',
    2: 'Ali',
    3: 'Olga'
};
const obj = {
    name: 'Nancy',
    lastName: 'saaaa',
    age: 44,
    add: 'xxx str'
};
// old school
let aliName = 'Ali';
let aliAdd = 'xxx str';
let aĺiAge = 22;
let aliLastNAme = 'something';

// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }

const object = {
    color: 'Red',
    size: 'big',
    year: 1990,
    arr: [1,3,4,5,67]
};

// Assessing properties with bracket notation
let f = "";
const car = f;
    console.log(car);
    car["name"] = "Ford";
    console.log(car);
    car["year"] = 2020;
    console.log(car);

// Assessing properties with dot notation
car.age = 22;
console.log(car);
car.age = 44;
console.log(car);
car.fa = "hhh";
console.log(car);
console.log(car.name);
console.log(car["name"]);

const save = new Object();
console.log(save);
const arr1 = new Array();
console.log(arr1);

// for...in               // to show all the object items
for (let prop in car) {
    console.log(`car.${prop} : ${car[prop]}`)
}

//
const person = {
    name: "Zain",
    age: 20,
    birthYear: 2000,
    city: "Berlin",
    print: function() {
        console.log(` this user ${person.name} his born in ${person.birthYear} `);
    },
    old: () => {
        return 2020 - person.birthYear;
    }
};

// Object.keys
console.log(Object.keys(person));   // expected output: [ 'name', 'age', 'birthYear' ]

// Object.values
console.log(Object.values(person)); // expected output: [ 'Zain', 20, 2000 ]

// Object.entries()
for (let [key, value] of Object.entries(person)) {
    console.log(`${key} : ${value}`);
}

// Methods
person.print();
console.log(person.old());

// exercise
 
// --------------------------------------------------------------------------------
// 04.02.2020 - 01
// Object Person.
// Create an object named person.
// Loop through the object and print both the property and value of the object.

console.log(`
Object Person:
`);

const person2 = {
    name: "Marcelo",
    age: 39,
    birthYear: 1980,
};

for (let [key, value] of Object.entries(person2)) {
    console.log(`${key} : ${value}`);
}

console.log(`
or
`);

for (let prop in person2) {
    console.log(`person.${prop} : ${person2[prop]}`)
}

// Object.assign
const obj1 = { 1 : 2, 2 : 300 };
const obj2 = { 1 : 4, 3 : 3224 };
const totalObj = Object.assign({4: 55}, obj1, obj2);
console.log(totalObj);  // expected output: { '1': 4, '2': 300, '3': 3224, '4': 55 }
const totalObj2 = Object.assign({2: 55}, obj1, obj2); 
console.log(totalObj2); // expected output: { '1': 4, '2': 300, '3': 3224 }
const totalObj3 = Object.assign({2: 55}, obj1, obj2, {5: 1}); 
console.log(totalObj3); // expected output: { '1': 4, '2': 300, '3': 3224, '5': 1 }
const totalObj4 = Object.assign({ name: "Nancy" }, obj1, obj2); 
console.log(totalObj4); // expected output: { '1': 4, '2': 300, '3': 3224, name: 'Nancy' }

// exercise
 
// --------------------------------------------------------------------------------
// 04.02.2020 - 02
// Get Values.
// Create a function that returns an array of all values of an object’s properties.
/*
getObjectValues({
choice1: "tea",
choice2: "coffee",
choice3: "milk"
})
*/
// Expected output:
// ["tea", "coffee", "milk"]

console.log(`
Get Values:
`);

const newPerson1 = {
    name: "Marcelo",
    age: 39,
    city: "Berlin"
};

const getValues = (object) => {
    return Object.values(object)
};
console.log(getValues(newPerson1));

// --------------------------------------------------------------------------------
// 04.02.2020 - 03
// Add A Method. 
// Create an object and add a method to that object which prints the values of the objects in a string.
// Example
/*
let person = {
  firstName: "Ali",
  job: "painter",
  age: 20, 
  city: "Berlin"
}
*/
// Example of Expected Output “Ali is a 20 years old and lives in Berlin”.

console.log(`
Add A Method:
`);

const newPerson2 = {
    name: "Marcelo",
    age: 39,
    city: "Berlin"
};

newPerson2.printOut = () => {
    return `${newPerson2.name} is a ${newPerson2.age} years old and lives ${newPerson2.city}`;
};
console.log(newPerson2.printOut());


// Object.defineProperty()
Object.defineProperty(person, "birthDay", {
    value: 20,
    writable: false              // if "true", value "20" can be modified
});
//person.birthDay = 20;          // new way to do the command above
console.log(person.birthDay);

// Object.defineProperties()
Object.defineProperties(person, {
    p1: {
        value: [],
        writable: true           // if is "true" this line is optional
    },
    p2: {
        value: {},
        writable: false
    },
    p3: {}
});
console.log(person.p1);
console.log(person.p2);
console.log(person.p3);
console.log(Object.keys(person)); // p1, p2 and p3 are not there

// exercises

// --------------------------------------------------------------------------------
// 04.02.2020 - 04
// List Properties.
// Create a function that returns an array of properties of a javascript object.
// Example
/*
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
*/
// Expected output:
// ["name", "class", "course"]

console.log(`
List Properties:
`);

const student = {
    name: "Marcelo",
    class: "FbW-26",
    course: "Web Development"
};
console.log(Object.getOwnPropertyNames(student));

student.printOut = () => {
    return Object.getOwnPropertyNames(student);
};
console.log(student.printOut());

//or

const getProperties = (obj) => {
    return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));

// --------------------------------------------------------------------------------
// 04.02.2020 - 05
// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// (use Objects and Functions)

function countLetters(str) {
    let arr = str.split("");
    console.log(arr);
    let result = {};
    function countOccurrences(string, letter) {
      let counter = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          counter++;
        }
      }
      return counter;
    }
    for (let i = 0; i < arr.length; i++) {
      let currentChar = arr[i];
      result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
    }
    return result;
  }
console.log(countLetters("ABC"));
console.log(countLetters("ABCCCCCDAAGG"));
console.log(countLetters("345122235gnmttG"));