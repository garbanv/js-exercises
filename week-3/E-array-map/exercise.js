// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

///written by me

function multiply (arr) {
    return arr * 100;
}

let x = numbers.map(multiply)
console.log(x)