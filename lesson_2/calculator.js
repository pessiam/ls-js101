let readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to the calculator");

prompt("what is your first number");

let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm...please enter a number");
  number1 = readline.question();
}

prompt("what is your second number");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm...please enter a number");
  number2 = readline.question();
}

prompt(
  "Choose your operation for the calculator. \n 1) Add 2) substract 3) divide 4) multiply"
);
let operation = readline.question();
let output;

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) / Number(number2);
    break;
  case '4':
    output = Number(number1) * Number(number2);
}

prompt(output);