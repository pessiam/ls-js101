/*
Write a function that takes two strings as arguments, 
determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/
//input
//string 1, string 2
//output
//return concatenating shorter string, longer string, shorter string
//edges
//length of two strings

function shortLongShort(string1, string2) {
   let stringOne = string1.length;
   let stringTwo = string2.length;
   if(stringOne < stringTwo){
     return console.log(string1 + string2 + string1);
   }else{
     return console.log(string2 + string1 + string2);
   }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
