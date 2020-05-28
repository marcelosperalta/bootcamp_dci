// exports.add = (x, y) => x + y;
// exports.sub = (x, y) => x - y;
// exports.mul = (x, y) => x * y;

// exports.prepareString = (str) => {
//     let newStringLowerCase = str.toString().toLowerCase();
//     let newStringFirstUpperCase = newStringLowerCase[0].toUpperCase();
//     let newStringWithoutFirstChar = newStringLowerCase.slice(1);
//     console.log(newStringFirstUpperCase + newStringWithoutFirstChar);
// };
// on terminal:
// node index.js beRliN
// result:
// Berlin

exports.prepareString = (nodeArray) => {
    for (let i = 0; i < nodeArray.length; i++) {
        nodeArray[i] = nodeArray[i][0].toUpperCase() + nodeArray[i].substring(1).toLowerCase();
    }
    let newString = nodeArray.join(' ').toString();
    console.log(newString);
};