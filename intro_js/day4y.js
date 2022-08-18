// function to determine the number of vowels in a string
// vowels are a, e, i, o and u
// function returns the count of vowels found

function countVowels(string) {
    var vowelCount = 0;

    string = string.toLowerCase();

    console.log(string);

    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            vowelCount += 1;
        }
    }


    return vowelCount;
}

console.log(countVowels('aeiou')); // 5
console.log(countVowels('bcdfg')); // 0
console.log(countVowels('hello')); // 2
console.log(countVowels('')); // 0

console.log(countVowels('hello world')); // 3
console.log(countVowels('AEIOU')); // 5