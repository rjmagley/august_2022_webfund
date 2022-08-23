// Objects, Arrays and Combinations Thereof

// objects are key-value pairs, common in most languages
// typically under a different name
var sampleObject = {'key1': 87, 'key2': 918, 'key3': true}

sampleObject['key1'] += 7;

// console.log(sampleObject['key1'])

// objects with arrays as values

var anotherObject = {'first_key': 81, 'second_key': true, 'third_key': [6, 8, 9, 1, 4]}

// console.log(anotherObject['third_key']);

// console.log(anotherObject['third_key'][1]);

// var temp = anotherObject['third_key'];

// console.log(temp[1]);

// array containing objects?

var arrayWithObjects = [{'a': 24, 'b': 71}, {'a': 12, 'b': 81}, {'a': 213, 'b': 51}, {'a': 15, 'b': 561}, {'a': 51, 'b': 1234}]

// console.log(arrayWithObjects[0][1]); //returns undefined
// console.log(`${arrayWithObjects[0]['b']}, ${arrayWithObjects[1]['b']}`);

// for (var i = 0; i < arrayWithObjects.length; i++) {
//     console.log(arrayWithObjects[i]['a']);
// }

var anotherArrayWithObjects = [{'a': 24, 'c': 87}, {'a': 12, 'b': 81}, {'a': 213, 'b': 51}, {'a': 15, 'c': 918}, {'a': 51, 'b': 1234, 'c': 61}, {'a': 67}];

var sum = 0;

for (var i = 0; i < anotherArrayWithObjects.length; i++) {
    if (anotherArrayWithObjects[i]['b'] != undefined) {
        sum += anotherArrayWithObjects[i]['b'];
    }
}

console.log(sum);

// JSON - JavaScript Object Notation