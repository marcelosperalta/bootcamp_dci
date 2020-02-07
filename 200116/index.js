
// DRY = Don't repeat yourself

let x = 1;
if (x <= 10) {
    x += 1;
} else {
    x -= 1;
}
console.log(x)

while (x <= 10) {
    console.log(x);
    x++;            // x = x + 1
//  x--;            // x = x - 1 
}

let y = 1;
let result;
while (y <= 10){
    result = y * 9;
    console.log(`${y} * 9 = ${result}`)
    y++;
}

let count = 10;
while (count >= 0){
    console.log(`This num is ${count}`);
    count--;
}

let a = 101;
do {
console.log(a);
a++; // a = a + 1
} while (a <= 100);

let zara = 100;
do {
    console.log(`There is ${zara} on the line`);
    zara--;
} while (zara >= 0);

// don't declare "let, var and const" inside of the loops (it is not a good practice)

for (let i = 0; i <= 10; i++){  // i = 0
    console.log(i);
}

// i is used on local scope, because of that you can repeat the name of the variable
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
    console.log(i);
    }
}
//or
for (let i = 0; i <= 10;){
    if (i % 2 == 0){
    console.log(i);
    }
    i++
}
//or
for (let i = 0; i <= 10;){
    console.log(i);
    i += 2;
}

for (let index = 100; index <= 1000;){
    console.log(index);
    index += 100;
}
//or
for (let index = 100; index <= 1000; index += 100){
    console.log(index);
}

for (let i = 100; i <= 1000; i += 100){
    console.log(i);
}

// highlight a variable = ctrl + d how many times you want

for (let i = 0; i <= 100; i++){
    if (i == 30){
    break;
    }
    console.log(i);
}

for(let w = 0; w <= 10; w++){
    if (w % 2 == 0 && w == 8){
        console.log(w);
        break;
    } 
}

let xx = false
for(let xx = 0; xx <= 100; xx++){
    if (xx){
        console.log(`That is it`);
        break;
    } 
}
if (xx == 20){
    xx == true;
}

let result2 = 0;
for (let i = 1; i <= 10; i++)    {   // i = 1
    for(let j = 1; j <= 10; j++) {
        result2 = i * j;
        console.log(`${i} * ${j} = ${result2}`);
    }
}

let str = "This is a log text";
for (let i = 0; i <= str.length; i++) {
    console.log(`The ${i} letter os ${str[i]}`);
}
//or
let str2 = "This is a log text";
for (let i = 0; i < str2.length; i++) {
    console.log(`The ${i} letter os ${str2[i]}`);
}
//or
let str3 = "This is a log text abcdefg";
for (let i = 0; i < str3.length; i++) {
    console.log(`The ${i} letter os ${str3[i]}`);
}


// exercises

// --------------------------------------------------------------------------------
// 16.01.2020 - 01
// Addition.
// Write a program to add up the numbers 1 to 20.

let  counterSum = 0;
for (let i = 1; i <= 20; i++){
    counterSum += i;     // 0 = 0 + 1, 0 = 0 + 2 ... 0 = 0 + 20
}
console.log(counterSum); // 1 + 2 + 3 ... + 20

// --------------------------------------------------------------------------------
// 16.01.2020 - 02
// There are "i" bottles of beer on the wall.
// Write a program that will output, “There is one bottle of beer on the wall.”
// “There are two bottles of beer on the wall” up until there are five bottles.

for (let i = 1; i <= 1; i++){
    console.log(`There is ${i} bottle of beer on the wall.`);
} for (let i = 2; i <= 5; i++){
    console.log(`There are ${i} bottles of beer on the wall.`);
}
//or
let text = "of beer on the wall";
for (let i = 1; i <= 5; i++){
    if (i == 1){
        console.log(`There is ${i} bottle ${text}`);
    } else {
        console.log(`There is ${i} bottles ${text}`);
    }
}
//or
let text2 = "of beer on the wall";
for (let i = 1; i <= 5; i++){
    if (i > 1){
        console.log(`There is ${i} bottles ${text2}`);
    } else {
        console.log(`There is ${i} bottle ${text2}`); 
    }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 03
// The odd/even reporter.
// Write a program that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd,
// and report that to the screen (e.g. “2 is even”).

for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`);
    } else if (i % 2 != 0) {
        console.log(`${i} is odd`);
    }     
}
//or
for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`);
    } 
    if (i % 2 == 1){
        console.log(`${i} is odd`);       
    }
}

//
for(let i = 0; i <= 10; i++){
    console.log("Hadi");
}
console.log("Hadi \n".repeat(10));

// --------------------------------------------------------------------------------
// 16.01.2020 - 04
// Show the drawing below using "console.log".
// YYYY
// YYYY
// YYYY
// YYYY
// YYYY
let box = "";
for (let i = 0; i <= 4; i++){
    box += "YYYY \n";
}
console.log(box);

//homework

// --------------------------------------------------------------------------------
// 16.01.2020 - 05
// Show the sequence below using "console.log".
// 1, 2, 4, 8... 128
console.log(`
1, 2, 4, 8... 128`);
let i = 0.5;
do {
  i = i * 2       // i = 1 * 2, i = 2 * 2, i = 4 * 2...
  console.log(i);
} while (i < 128);

// --------------------------------------------------------------------------------
// 16.01.2020 - 06
// Show the sequence below using "console.log".
// 0, 2, 4... 10
console.log(`
0, 2, 4... 10`);
i = -2;
do {
  i = i + 2
  console.log(i);
} while (i < 10);

// --------------------------------------------------------------------------------
// 16.01.2020 - 07
// Show the sequence below using "console.log".
// 3, 6, 9 ... 15
console.log(`
3, 6, 9... 15`);
i = 0;
do {
  i = i + 3
  console.log(i);
} while (i < 15);

// --------------------------------------------------------------------------------
// 16.01.2020 - 08
// Show the sequence below using "console.log".
// 9, 8, 7... 0
console.log(`
9, 8, 7... 0`);
i = 10;
do {
  i = i - 1
  console.log(i);
} while (i >= 1);

// --------------------------------------------------------------------------------
// 16.01.2020 - 09
// Show the sequence below using "console.log".
// 1 1 1 2 2 2 3 3 3 4 4 4
console.log(`
1 1 1 2 2 2 3 3 3 4 4 4`);
for (let i = 1; i <= 4; i++){   // 1 1 1 2 2 2 3 3 3 4 4 4
  for (let j = 1; j <= 3; j++){ // 1 2 3 1 2 3 1 2 3 1 2 3
    console.log(i);
  }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 10
// Show the sequence below using "console.log".
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
console.log(`
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);
for (let i = 1; i <= 3; i++){  
  for (let j = 0; j <= 4; j++){ 
    console.log(j);
  }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 11
// Show the drawing below using "console.log".
//T
//TT
//TTT
//TTTT
//TTTTT
console.log(`
T, TT...
`);
x = ``;
for (let i = 1; i <= 5; i++){
  x += `T`;
  console.log(x);
} 

// --------------------------------------------------------------------------------
// 16.01.2020 - 12
// Show the drawing below using "console.log".
//@@@@@
//@@@@
//@@@
//@@
//@
console.log(`
@@@@@, @@@@...
`
);

x = `@@@@@@`;
for (let i = 1; i <= 5; i++){
  x = x.slice(1);
  console.log(x);
}   
console.log(`
or
`);
x = `@@@@@@`;
for (let i = 1; i <= 5; i++){
  x = x.substring(1);
  console.log(x);
} 


// array 
console.log(`
array
`);
let firstName = "Hadi";
let firstName1 = "Ali";
let firstName2 = "Olga";
let arrVar = [firstName, firstName1, firstName2];
let arr = [`Hadi`, `Ali`, `Olga`, `Nancy`];
console.log(arr[2]);
let arrInt = [1, 2, 3, 4, 5, 6]; // array has index number starting for 0
console.log(arrInt[3]);
let arrNum = ["First", "2nd", "3rd", "4th"];
console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++){
    console.log(`${i} is the ${arrNum[i]}`)
}

let arrSt = [];                  // empty array
for (let i = 0; i <= 10; i++) {
    arrSt[i] = 2 + i;            // arrStr[0] = 2 + 0
    console.log(arrSt[i]);
}
console.log(arrSt);