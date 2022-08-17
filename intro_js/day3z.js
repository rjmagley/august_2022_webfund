// loop through numbers 1 through 1000
// only print numbers evenly divisible by 7 OR 4

for (var i = 1; i <= 1000; i += 1) {
    if (i % 4 == 0 || i % 7 == 0) {
        // modulo operator - returns the remainder of division
        console.log(i);
    }
}

// all the tools we're using - for loops, if/else statements, etc.
// can be combined in different ways

