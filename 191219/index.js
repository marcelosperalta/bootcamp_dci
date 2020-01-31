
console.log("Hey I'm Js");    // this is the most used function to print out

console.log('I need keys');

let x = "Hi I'm X";
console.log(x);

let q;
q = "Hi this is q";
console.log(q);

let w = "Hi";
let a = " I am...";
console.log(w + a);

let j = 3;
let r = 20;
console.log(r - j);
console.log(j < r);             // j is 3 and r is 20 and 20 is bigger than 3

let s = 2;
let c = 22;
let v = "the sum";
console.log(`S ${s} + C ${c} = ${v}`);

let x2 = 4;
let q2 = 3;
let w2 = "This is sum";
let e = "This first value";
let t = "This second value";
let result = x2 + q2;
console.log(`${e} ${x2} + ${t} ${q2} = ${w2} ${result}`);

function sum(){     // function definition
    let d = 3 + 5;
    return d        // every function will return one value
}
console.log(sum()); // function call

function sum2 (value1,value2) {
    let result = value1 + value2;
    return result;
}
console.log(sum2(10,33));