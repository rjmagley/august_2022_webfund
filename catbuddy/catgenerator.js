function catGenerator() {
    var cats = [];

    var catNames = ["Daisy", "Alexandria", "Spooky", "Fluffy", "Mr. Pickles", "Garfield", "Mittens", "Skrunkle", "Troutleap", "Not A Cat"];
    var descriptiveWords = ["cuddly", "feisty", "sleepy", "inquisitive", "silly", "energetic", "chonky", "playful", "fluffy", "sassy"];
    var favoriteActivities = ["sleep", "play with toys", "bite your toes while you're doing a lecture", "assert dominance", "be a snake", "do your taxes", "steal socks", "jump, jump around", "roll over and expose their belly (it's a trick don't do it!!!)"]

    // randomly generate 5 to 7 cats
    for (var i = 0; i < Math.ceil(Math.random() * 3) + 4; i++) {
        var newCat = {};
        // cat randomly needs a name, descriptive word and favorite activity, as well as a picture
        newCat['name'] = catNames[Math.floor(Math.random() * catNames.length)];
        newCat['description'] = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
        newCat['activity'] = favoriteActivities[Math.floor(Math.random() * favoriteActivities.length)];
        newCat['picture'] = `cat${Math.floor(Math.random() * 15) + 1}.jpg`

        cats.push(newCat);
    }

    return cats;
}

console.log(catGenerator())