/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.
*/

//What is the bill? 200
//What is the tip percentage? 15

//The tip is $30.00
//The total is $230.00

function tipCalculator(){
let rlSync = require('readline-sync');

console.log("What is the bill?");
let bill =  rlSync.prompt();
bill = parseFloat(bill);
console.log("What is the tip percentage?");
let tipPrecentage = rlSync.prompt();

let calculateTip = (bill/100)*tipPrecentage;
console.log(`The tip is $${calculateTip}`)
console.log(`The total is $${bill+calculateTip}`)
}

tipCalculator();