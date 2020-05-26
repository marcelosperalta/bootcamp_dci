const args = process.argv.slice(2);

function parseNum(arg) {
    const number = parseFloat(arg);
    if (isNaN(number)) {
        console.log(`Sorry, ${arg} is not a number. Please try again`);
        process.exit();
    }
    return number;
}
function sum(numArray) {
    return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
    return sum(numArray) / numArray.length;
}
function med(numArray) {
    let sorted = numArray.sort();
    let middleNumber = (sorted.length / 2);
    if (Number.isInteger(sorted.length / 2)) {
        return `
                 Sorted: ${sorted}
                 Median: ${(sorted[middleNumber - 1] + sorted[middleNumber]) / 2}
                `;
    } else {
        return `
                Sorted: ${sorted}
                Median: ${sorted[middleNumber - 0.5]}
                `;
    }
}

const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// sum 3 5 6 kdfjb
// avg 45 6 67

switch (operation) {
    case "sum":
        console.log(sum(numbers));
        break;
    case "avg":
        console.log(avg(numbers));
        break;
    case "med":
        console.log(med(numbers));
        break;
    default:
        console.log(
            `
            I cannot do this,please type:\n
            'sum' to calculate Summation
            or
            'avg' to calculate Average
            or
            'med' to calculate Median
            `
        );
}

// on terminal:

// node index.js sum 4 4 4 5 6
// result:
// 23

// or

// node index.js agv 4 4 4 5 6
// result:
// 4.6

// or

// node index.js med 1 2 3 4 5 6 8 9
// result:
// 4.5