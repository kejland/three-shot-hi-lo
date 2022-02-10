const prompt = require("prompt-sync")({sigint:true});

let ans = Number(prompt("I'm thinking of a number between 1 to 100. What is it? "));

let num = Math.ceil(Math.random()*100);


//while chances < 3

let count = 1;

while (count <= 2){

    if (ans === num){
        console.log("Yes! " + num + " is correct!");
    } else if (ans < num){
        low = Number(prompt("Sorry, too low! Guess again: "));
    } else if (ans > num){
        high = Number(prompt("Sorry, too high! Guess again: "))
    }

    count++
}

console.log("Sorry, I was thinking of " + num);
