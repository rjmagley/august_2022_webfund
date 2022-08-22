console.log("hello!!!!!");

var x = 0;

function buttonClick() {
    var prizes = document.getElementsByClassName("prizes");
    console.log(prizes);
    for (var i = 0; i < prizes.length; i++) {
        prizes[i].innerHTML = ":3";
    }
    
}

// function otherFunction() {
//     x += 1;
//     console.log(x);
// }