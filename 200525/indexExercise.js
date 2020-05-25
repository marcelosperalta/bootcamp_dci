//console.log(`\nTestes:\n`);

function imprimirCabecalho(quantidadeEstrelas, palavra) {
    let estrelas = "";
    if (quantidadeEstrelas) {
        for (let index = 0; index < quantidadeEstrelas; index++) {
            estrelas += "*";
        }
        return console.log(`${estrelas}\n${palavra}\n${estrelas}`);
    } else {
        return console.log(`**********\n${"    Hi"}\n**********`);
    }
}
//imprimirCabecalho();
// resultado:
// **********
//     Hi
// **********
//imprimirCabecalho(7, "Marcelo");
// resultado:
// *******
// Marcelo
// *******


// Exercise:

// Create a program that prints headers to the terminal.
// - This program should accept 2 arguments. 
//      > The first argument should be the number of stars to print before and after the header. 
//      > The second argument should be the word to print inside the header.
// - If no stars or no header are passed to the function, 
//   the function should print out 10 stars and the word "Hi" to the console by default.

// console.log(`\nExercise:\n`);

const args = process.argv.slice(2);
function headerPrinter(args) {
    let stars = "";
    if (process.argv.length == 4) {
        for (let index = 0; index < args[0]; index++) {
            stars += "*";
        }
        return console.log(`${stars}\n${args[1]}\n${stars}`);
    } else {
        return console.log(`**********\n${"    Hi"}\n**********`);
    }
}
headerPrinter(args);