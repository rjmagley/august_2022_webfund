function rollDie(min,max){
    return Math.ceil(Math.random()*max - min)+min;
}

for(i = 0; i < 10; i++){
    console.log(rollDie(20, 25));
}