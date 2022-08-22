// Objects

// an object a set of key-value pairs

var kitty = {
    'name': 'Daisy',
    'color': 'grey',
    'age': 9,
    'printInfo': function() {
        console.log(`This is ${this.name}, a ${this.color} kitty who is ${this.age} years young!`)
    }
};

// this object has three keys: 'name', 'color', 'age'

console.log(kitty['name']);

kitty['age'] += 1;

console.log(kitty);

kitty.printInfo();

