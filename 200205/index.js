// Object literal context
const o = {
    name: "Ali",
    age: 22,
    add: "xxx str"
}

// Property accessors

// 1. Dot notation      // object.property
o.name;                
o.age;

// 2. Bracket notation  // object['property']
o['add'] = 'see str';

// Object.keys
console.log(Object.keys(o));

//Object.values
console.log(Object.values(o));

// Methods
o.print = function () {
    console.log(` Hi ${o.name} you are very old ${o.age} and it's very nice to live in ${o.add} `)
};
o.print();

// this
function userData (userName, userAge, userAdd) {
    const obj = {                                 // this is "obj" // do not work with ES6
        name: userName,
        age: userAge,
        add: userAdd
        };
        obj.outPut = function () {
            console.log(` Hi ${this.name} you are very old ${this.age} and it's very nice to live in ${this.add} `)
        };
    return obj;
}
userData("Olga", 40, "see str");

// Object.prototype.hasOwnProperty()

const person = {
    hight: 177,
    age: 34,
    city: 'Berlin'
}
console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('abc'));

// exercises

// --------------------------------------------------------------------------------
// 05.02.2020 - 01
// Merge.
// Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

let first = {firstName: "John"};
let last = {lastName: "Smith"};
let fullName = Object.assign(first, last);
console.log(fullName);    // expected output: { firstName: 'John', lastName: 'Smith' }

// with function

const fun = (x, o) => {
    return Object.assign(x,o);
};
const o1 = {firstName: "John"};
const o2 = {lastName: "Smith"};
console.log(fun(o1, o2)); // expected output: { firstName: 'John', lastName: 'Smith' }

// with Spread-Operator/Spread-Syntax
const fun2 = (x, o) => {
    return { ...x, ...o};;
};
console.log(fun2({ firstName: "Marcelo"}, { lastName: "Peralta"},));

// --------------------------------------------------------------------------------
// 05.02.2020 - 02
// Zodiac signs
// Create and object that receives: user name, birthday, birth month, birth year.
// Show what is the zodiac signs.
//
// from 20.01 to 18.02 = "Aquarius"
// from 19.02 to 20.03 = "Pisces"
// from 21.03 to 19.04 = "Aries"
// from 20.04 to 20.05 = "Taurus"
// from 21.05 to 20.06 = "Gemini"
// from 21.06 to 22.07 = "Cancer"
// from 23.07 to 22.08 = "Leo"
// from 23.08 to 22.09 = "Virgo"
// from 23.09 to 22.10 = "Libra"
// from 23.10 to 21.11 = "Scorpio"
// from 22.11 to 21.12 = "Sagittarius"
// from 22.12 to 19.01 = "Capricorn"
/*
function zodiac(name, day, month, year) {
const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    };
    return result;
}
console.log(zodiac("Marcelo", "31", "10", "1980"));
*/

// v1

console.log(`
Zodiac v1:
`);

let day = 31;
let month = 10;
       if (month <= 12 && month ==  1 && day >= 20 && day <= 31 || month ==  2 && day <= 18) { // from 20.01 to 18.02 = "Aquarius"
    console.log("Aquarius");
} else if (month <= 12 && month ==  2 && day >= 19 && day <= 29 || month ==  3 && day <= 20) { // from 19.02 to 20.03 = "Pisces"
    console.log("Pisces");
} else if (month <= 12 && month ==  3 && day >= 21 && day <= 31 || month ==  4 && day <= 19) { // from 21.03 to 19.04 = "Aries"
    console.log("Aries");
} else if (month <= 12 && month ==  4 && day >= 20 && day <= 30 || month ==  5 && day <= 20) { // from 20.04 to 20.05 = "Taurus"
    console.log("Taurus");
} else if (month <= 12 && month ==  5 && day >= 21 && day <= 31 || month ==  6 && day <= 20) { // from 21.05 to 20.06 = "Gemini"
    console.log("Gemini");
} else if (month <= 12 && month ==  6 && day >= 21 && day <= 30 || month ==  7 && day <= 22) { // from 21.06 to 22.07 = "Cancer"
    console.log("Cancer");
} else if (month <= 12 && month ==  7 && day >= 23 && day <= 31 || month ==  8 && day <= 22) { // from 23.07 to 22.08 = "Leo"
    console.log("Leo");
} else if (month <= 12 && month ==  8 && day >= 23 && day <= 31 || month ==  9 && day <= 22) { // from 23.08 to 22.09 = "Virgo"
    console.log("Virgo");
} else if (month <= 12 && month ==  9 && day >= 23 && day <= 30 || month == 10 && day <= 22) { // from 23.09 to 22.10 = "Libra"
    console.log("Libra");
} else if (month <= 12 && month == 10 && day >= 23 && day <= 31 || month == 11 && day <= 21) { // from 23.10 to 21.11 = "Scorpio"
    console.log("Scorpio");
} else if (month <= 12 && month == 11 && day >= 22 && day <= 30 || month == 12 && day <= 21) { // from 22.11 to 21.12 = "Sagittarius"
    console.log("Sagittarius");
} else if (month <= 12 && month == 12 && day >= 22 && day <= 31 || month ==  1 && day <= 19) { // from 22.12 to 19.01 = "Capricorn"
    console.log("Capricorn");
} else {
    console.log("Please, put a valid date");
}

// v2

console.log(`
Zodiac v2:
`);

function zodiac (name, birthday, month, year) {
  
  let result = {

    userName: name,
    birthDay: birthday,
    birthMonth: month,
    birthYear: year,
    
    printOut: function () {

      let signs = [
        '', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
      // 0,           1,          2,        3,       4,        5,        6,
        'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn' 
      //       7,     8,       9,      10,        11,            12,         13,
      ];

      let lastDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
      //              0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13

               if (birthday > lastDay[month] && birthday >= 1 && month >= 1 && month <= 12) {

            return `${name} was born ${birthday}.${month}.${year} and then your sign is ${signs[month + 1]}`;

        } else if (birthday < lastDay[month] && birthday >= 1 && month >= 1 && month <= 12) {

            return `${name} was born ${birthday}.${month}.${year} and then your sign is ${signs[month]}`;

        } else {

            return "Please, write a valid date";
        }
     }
  };
//console.log(result);
  return result.printOut();

}
console.log(zodiac("Marcelo", 31, 10, 1980));  // expect output: Marcelo was born 31.10.1980 and then your sign is Scorpio
console.log(zodiac("Priscila", 15, 12, 1988)); // expect output: Priscila was born 15.12.1988 and then your sign is Sagittarius
console.log(zodiac("Hadi", 1, 9, 1989));       // expect output: Hadi was born 1.9.1989 and then your sign is Virgo
console.log(zodiac("Test", 0, 12, 1988));      // expect output: Please, write a valid date
console.log(zodiac("Test", 15, 13, 1988));     // expect output: Please, write a valid date

// v3 - teacher Hadi's partial solution

console.log(`
Zodiac v3:
`);

// function zodiac1(name, day, month, year) {
//   const result = {
//     userName: name,
//     birthDay: day,
//     birthMonth: month,
//     birthYear: year,
//     yourZodiac: function() {
//       let singNames = [
//         "Capricorn",
//         "Aquarius",
//         "Pisces",
//         "Aries",
//         "Taurus",
//         "Gemini",
//         "Cancer",
//         "Leo",
//         "Virgo",
//         "Libra",
//         "Scorpio",
//         "Sagittarius",
//         "Capricorn"
//       ];
//  
//       let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
// // do something 🤓
// return `Hey ${this.userName}, your zodiac sing is ${yourZodiac}`;
//     }
//   };
//   return result.yourZodiac();
// }
// console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");

// v3 - teacher Hadi's solution

function zodiac1(name, day, month, year) {
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {
        let singNames = [
          "Capricorn",
          "Aquarius",
          "Pisces",
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn"
        ];
        let userBDay = parseInt(this.birthDay);
        let month = parseInt(this.birthMonth);
        let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        let yourZodiacName =
          userBDay > endsAt[month] ? singNames[month] : singNames[month - 1];
        return `Hey ${this.userName}, your zodiac sing is ${yourZodiacName}`;
      }
    };
    return result.yourZodiac();
  }
  console.log(zodiac1("Hadi", "01", "09", "1989") + " (2nd way)");