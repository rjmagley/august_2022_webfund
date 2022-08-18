// functions

// functions should be named in a way that represent what they accomplish
// function that takes in a number
// and returns that number multiplied by 3

// functions have parameters - inputs
function multiplyByThree(number) {
    var newNumber = number * 3;
    return newNumber; // returns data from inside the function to whatever calls it
}

// once we define the function, we can use it by calling it

var x = 3;

// multiplyByThree accepts one argument - a number
// in this case the number is x
var y = multiplyByThree(x);

console.log(y);

var y = x * 3;