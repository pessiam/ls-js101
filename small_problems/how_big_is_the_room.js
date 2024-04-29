//Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.



//side × side = area of a square
//1 meter = 3.28084
//1 meter = 10.7639 square feet

//input 
//length,  width
//output
//meter square, feet


function calculateRoomArea(){
let rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("enter the length in meters\n")
let length = rlSync.prompt();
length = parseInt(length,10);

console.log("enter the width in meters\n")
let width = rlSync.prompt();
width = parseInt(width,10);


let squareMetersArea = length * width;
let squareFeetArea = squareMetersArea * SQMETERS_TO_SQFEET;

console.log(squareMetersArea);
console.log(squareFeetArea);
}


calculateRoomArea();