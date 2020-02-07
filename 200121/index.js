// our bff
function display (str){
    console.log(str)
}
display("Hadi")

// Array.isArray(arr)
const names = ["Ali" , "Hadi", "Olga", "Nancy"];
let x = 1;
console.log(Array.isArray(names)); // Array.isArray = is this array?
console.log(Array.isArray(x));     // Array.isArray = is this array?

// Array.includes()
console.log(names.includes('Hadi'));
console.log(names.indexOf('Hadi'));

// Array.reverse()
let rev = names.reverse();
console.log(typeof rev);
console.log(rev);

// Array.concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 3, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);

// Array.filter()
let result1 = names.filter(name => name.length == 4);
console.log(result1);
let result2 = names.filter(name => name.length == 4 || name.length == 3);
console.log(result2);

// Array.find()
let result3 = names.find(name => name == "Hadi"); // only very first result
console.log(result3);
let result4 = names.find(name => name[0] == "A"); // only very first result
console.log(result4);

// Array.map()
const intArray = [2, 3, 5, 6, 8];
let result5 = intArray.map(x => x + 1);
console.log(result5);


// exercises

// --------------------------------------------------------------------------------
// 21.01.2020 - 01
// Reverse the string: “JavaScript”.

const str1 = "JavaScript";
let strToArr = str1.split("")
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

// --------------------------------------------------------------------------------
// 21.01.2020 - 02
// Make an array of your siblings’ names or your favorite movie characters’ names.

const coolNames1 = ["Ali" , "Hadi", "Olga", "Nancy"];

// --------------------------------------------------------------------------------
// 21.01.2020 - 03
// Make an array of your parents’ names.

const coolNames2 = ["A" , "B", "C", "D"];

// --------------------------------------------------------------------------------
// 21.01.2020 - 04
// Combine these two arrays.

const arrTotal3 = coolNames1.concat(coolNames2);
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 05
// Add your pets’ names.

arrTotal3.push("Dyson");
arrTotal3.push("Sofi");
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 06
// Reverse the order of the array.

arrTotal3.reverse();
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 07
// Access one of your parents’ names.

let mom = arrTotal3[2];
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 08
// Update the name of one of your parents.

mom = "Katy"
arrTotal3[2] = mom;
console.log(arrTotal3);


// function

function sum (x, y) {
    return x + y;
}
let fun = sum(2, 4); // function call
console.log(fun);

function div (x, y){
    return x / y;
}

function age (x){
    if (x == 30) {
        return "You are cool"
    } else {
        return "You are nice"
    }
}
console.log(age(20));

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 52, 664, 5, 6, 10, 45, 66];
function arrBig (array){                                
    let result = array.filter(num => num >= 5);
    return result;
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));

const numbers3 = [113, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers4 = [149, 442, 52, 664, 5, 6, 10, 45, 66];
function bigNum (b){                                
    let c = b.filter(a => a >= 5);
    return c;
}
console.log(bigNum(numbers3));
console.log(bigNum(numbers4));

const numbers5 = [2, 149, 1, 5, 6, 10];
function bigNum (b){                                
    return b.filter(a => a >= 5);
}
console.log(bigNum(numbers5));

function fourArrChar (array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].length == 4){
            result.push(array[i]);
        }
    }
    return result;
}
const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
console.log(fourArrChar(names2));

function Ochr (array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i][0] == "O"){
            result.push(array[i]);
        }
        return result;
    }
}
console.log(Ochr(names2));

const monthNames = ["Jan", "Fev", "Mar", "Apr", "May", "Jun"];
function nameOfThatMonth(num){
    let result = "";
    switch(num){
        case 1:
        result = monthNames[0];
        break;
        case 2:
        result = monthNames[1];
        break;
        case 3:
        result = monthNames[2];
        break;
        case 4:
        result = monthNames[3];
        break;
        case 5:
        result = monthNames[4];
        break;
        case 6:
        result = monthNames[5];
        break;
        default:
        result = "This is not a month";
    }
    return result;
}
console.log(nameOfThatMonth(2));

const monthNames2 = ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Set", "Oct", "Nov", "Dez"];
function nameOfThaMonthEasyVersion(num){
    let result = "";
    let newNum = num - 1;
    if (num >= 1 && num <= 12){
        result = monthNames2[newNum];
    } else {
        result = "Sorry it is not a month";
    }
    return result;
}
console.log(nameOfThaMonthEasyVersion(1));

const names3 = ["Ali", "Hadi", "Nancy", "Olga"];
function reverseNames(arr){
let newArray = [];
let str = "";
for (let i = 0; i < arr.length; i++){
    str = arr[i]
          .split("")
          .reverse()
          .join("");
    newArray.push(str);
  }
  return newArray
}
console.log(names3);
console.log(reverseNames(names3));

//Array.reduce()

const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));    // expected output: 10
console.log(arr.reduce(reducer, 5)); // expected output: 15


const arr3 = ["a", "b", "c", "d"];
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr3.reduce(reducer2));

const arr4 = [1, 2, 3, 4];
const a = (acc, val) => acc * val;
console.log(arr4.reduce(a));