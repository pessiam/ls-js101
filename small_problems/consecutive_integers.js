/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/
/*
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

function consecutiveIntegers(){
	let rlsync = require("readline-sync");
	let integer = rlsync.question("Please enter an integer greater than 0: ");
	integer = parseFloat(integer);
  //check if integer is a number or greater than 0
  if(typeof integer === "number" && integer > 0){
	let computeValue = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product.');
  
  if(computeValue === "s"){
  	let sumValue = sumCompute(integer);
	  console.log(`The sum of the integers between 1 and ${integer} is ${sumValue}.`)

  }else if(computeValue === "p"){
  	let productValue = computeProduct(integer);
	  console.log(`The product of the integers between 1 and ${integer} is ${productValue}.`)
      
  }else{
  	console.log('Please Enter "s" to compute the sum, or "p" to compute the product. ')
  }

  }else{
  	return console.log("Please enter a number, the number should be greater than 0: ")
  }
}

function sumCompute(integer){
	let total = 0;
	for(let i = 0; i <= integer; i++){
   total = total + i;
	}
	return total;
}

function computeProduct(integer){
	let total = 1;
	for(let i = 1; i <= integer; i++){
   total = total * i;
	}
	return total;
}


consecutiveIntegers();