// swapping items in an array

var sampleArray = [6, 7, 1, 2, 4];

// write code here
var temp = sampleArray[0];
sampleArray[0] = sampleArray[4];
sampleArray[4] = temp;

console.log(sampleArray); // [4, 7, 1, 2, 6]