var players = ["Ryan", "Alex", "Brad", "Jort"];

var turnsTaken = 0;

while (turnsTaken < 100) {
    console.log(players[turnsTaken % players.length]);
    turnsTaken += 1;
}

// for (var i = 0; i < 100; i++) {
//     console.log(i % players.length);
//     // console.log(players[i % players.length]);
// }