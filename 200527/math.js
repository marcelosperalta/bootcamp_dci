// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// exports.mul = (a, b) => a * b;
// or
// module.exports = {
//     add = (a, b) => a + b,
//     sub = (a, b) => a - b,
//     mul = (a, b) => a * b,
// }
// or
add = (a, b) => a + b;
sub = (a, b) => a - b;
mul = (a, b) => a * b;
module.exports = {
    add,
    sub,
    mul,
};