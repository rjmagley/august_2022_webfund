function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }

    return newArray;
}

var x = [1, 2, 3, 4, 5];

y = reverseArray(x);

console.log(y);
console.log(x);