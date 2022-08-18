// functions can have multiple parameters

function multiplyByX(q, x) {
    var newNumber = q * x;
    return newNumber; // returns data from inside the function to whatever calls it
}

var x = 9;

var y = multiplyByX(x, 9);

console.log(y);