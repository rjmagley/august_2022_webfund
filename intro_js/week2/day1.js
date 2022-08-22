// the Math library, and also libraries in general

// Math.method() runs a specific method from the Math library
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// console.log(Math.random());
// console.log(Math.floor(5.019238161934));
// console.log(Math.ceil(5.019238161934));

// write a function that simulates rolling a die
// the die is numbered 1-6
// the function should return a whole numbers from 1 to 6 inclusive
// 0, 8, -2, 3.0192817 are all invalid return values - you're not done yet

function rollDie() {
    var x = Math.ceil(Math.random() * 6);
    return x;
}

var results = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

for (var i = 0; i < 10000000; i++) {
    results[rollDie()] += 1;
}

console.log(results);
