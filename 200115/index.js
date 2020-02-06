
// exercises

// --------------------------------------------------------------------------------
// 15.01.2020 - 01
// Declare two variables:
// “a” with the value of true,
// and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).
// 
// Declare three more variables “x”, “y”, “z”.
// Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

console.log(`
Declare variables:
`);

var a = true;
var b = false;
console.log(  a && b  ? "true" : "false");
console.log(  a || b  ? "true" : "false");
console.log(!(a && b) ? "true" : "false");
var x = 9;
var y = 2;
var z = 1;
if (x > z && x > y){
    console.log("x is greater than z and y");
} else {
    console.log("x is less than or equal to z and/or y");
}
if (x !== y){
    console.log("x is not equal to y");
} else {
    console.log("x is equal to y");
}
if (z < y || z > x){
    console.log("z is less than y OR z is greater than x");
} else {
    console.log("z is greater than y AND less than x");
}
if (x == z || x !== y){
    console.log("x is equal to z OR x is NOT equal to y");
} else {
    console.log("x is NOT equal to z OR x is equal to y");
}
if (x >= 10 && y <= 10){
    console.log("x is greater than or equal to 10 AND y is less than or equal to 10");
} else {
    console.log("x is less than or not equal to 10 AND y is greater than or not equal to 10");
}
if ((x * z) < 100 || (x * y) > 100){
    console.log("x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.");
} else {
    console.log("x multiplied by z is greater than 100 OR whether x multiplied by y is less than 100.");
}

// --------------------------------------------------------------------------------
// 15.01.2020 - 02
// Calculate the perimeter of a square.
// Assume each side is 4.75cm.

console.log(`
Perimeter of a square:
`);

var squareSides = 4.75;
var perimeter = 4 * 4.75;
console.log(`The perimeter of a square where each side has ${squareSides}cm is ${perimeter}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 03
// Calculate the perimeter of a triangle.
// Assume the length of the sides are 5cm, 6cm (base), 7cm.

console.log(`
Perimeter of a triangle:
`);

var triangleSide1 = 5;
var triangleSide2 = 6;
var triangleSide3 = 7;
var trianglePerimeter = triangleSide1 + triangleSide2 + triangleSide3;
console.log(`The triangle perimeter is ${trianglePerimeter}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 04 
// Calculate the area of a square.
// Each side is 5cm.

console.log(`
Area of a square:
`);

var squareSides2 = 5;
var squareArea = squareSides2 ** 2;
console.log(`The square area is ${squareArea}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 05
// Calculate the area of a triangle.
// Assume the length of the sides are 5cm, 6cm (base), 7cm.
// (this is a right triangle)
// (area of triangle is base length multiplied by height or altitude of the triangle and divided by 2)

console.log(`
Area of a triangle:
`);

var triangleSideA = 5;  // assumed as the height of the triangle
var triangleSideB = 6;   
var triangleSideC = 7;
var triangleArea = (triangleSideB * triangleSideA) / 2;
console.log(`The triangle area is ${triangleArea}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 06
// Calculate the volume of a cube. 
// Length of each side is 9cm.

console.log(`
Volume of a cube:
`);

var lengthCubeSides = 9;
var cubeVolume = lengthCubeSides ** 3;
console.log(`The cube volume is ${cubeVolume}cm`); 

// --------------------------------------------------------------------------------
// 15.01.2020 - 07
// Calculate the three bills including tips:
// €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

console.log(`
Bills including tips:
`);

var bill1 = (22.35 * (0.10 + 1));
console.log(bill1.toFixed(2));
var bill2 = (26.67 * (0.15 + 1));
console.log(bill2.toFixed(2));
var bill3 = (35.92 * (0.20 + 1));
console.log(bill3.toFixed(2));
var total = bill1 + bill2 + bill3;
console.log(`The total with tips is ${total.toFixed(2)}`);