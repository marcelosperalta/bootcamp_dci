// --------------------------------------------------------------------------------
// 29.01.2020 - 01
// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary 
// For two kids subtract 25%
// and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

console.log(`
Salary and kids:
`);

function salaryTaxes (userName, salary, ...kidsNames) {
    if (kidsNames.length === 1) {
        newSalary = (salary - (salary * 0.30));
        result = `${userName} is the father of ${kidsNames}. His salary subtracting 30% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length == 2) {
        newSalary = (salary - (salary * 0.25));
        result = `${userName} is the father of ${kidsNames.join(" and ")}. His salary subtracting 25% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length > 2) {
        newSalary = (salary - (salary * 0.20));
        result = `${userName} is the father of ${kidsNames.join(", ")}. His salary subtracting 20% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length === 0) {
        newSalary = (salary - (salary * 0.55));
        result = `${userName} does not have kids. His salary subtracting 55% of taxes is ${newSalary.toFixed(2)} EUR.`;
    }
    return result;
}
console.log(salaryTaxes("Marcelo", "4166.66", "Marco"));
console.log(salaryTaxes("Marcelo", "4166.66", "Marco", "Elisa"));
console.log(salaryTaxes("Marcelo", "4166.66", "Marco", "Elisa", "Isabel"));
console.log(salaryTaxes("Marcelo", "4166.66"));


// --------------------------------------------------------------------------------
// 29.01.2020 - 02
// Create a function that receive a text from user
// and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

console.log(`
Phone number:
`);

function phoneNumber (arg) {
    let newArg = arg.slice(0,3);
    //console.log(newArg);
    if (newArg === "030" || newArg === "017" && !isNaN(arg) && arg.length === 10) {
    //console.log(arg.length);    
        result = arg;
    } else {
        result = "Please, put a valid phone number with 10 digits without spaces"
    }
    return result
 }
 console.log(phoneNumber("0171234567"));
 console.log(phoneNumber("0301234567"));
 console.log(phoneNumber("0181234567"));
 console.log(phoneNumber("1311234567"));
 console.log(phoneNumber("01712345678"));


// --------------------------------------------------------------------------------
// 29.01.2020 - 03
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with DE and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

console.log(`
German bank account:
`);

function bankAccount (arg) {
    let newArg = arg.toUpperCase().slice(0,2);
    //console.log(newArg);
    if (newArg === "DE" && arg.length === 22) {   
        result = "This is a valid German bank account.";
    } else {
        result = "Please, put a valid German bank account.";
    }
    return result
 }
 console.log(bankAccount("DE12345678901234567890"));
 console.log(bankAccount("de12345678901234567890"));
 console.log(bankAccount("De12345678901234567890"));
 console.log(bankAccount("Da12345678901234567890"));
 console.log(bankAccount("DE123456789012345678901"));