// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement


var num;

function isANumber (num){
if (typeof num === "number"){
    return true;
}
  return false;
}


function positiveNumber(num){
  if (num > 0) {
    return true;
  }
  return false
}

function less100(num){
  if (num <=100){
    return true;
  }
  return false;
}

function validate(num) {
if (isANumber(num) && positiveNumber(num) && less100(num)) {
  return true
}
  return false
  
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
