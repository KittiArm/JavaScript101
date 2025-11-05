// For Loop

/*

For(initial value; condition; step){
    statement
}

Usage : When we know the number of loop.

Statement:
    1. break : Out of loop and end
    2. continue : Out of loop and restart

*/

let friend = Array("Mink", "Punch", "Mingu", "Bonus", "Max", "Gartoon", "Noon", "Por", "Knet", "First")

let i = 1;
for(i; i<=10; i++){
    console.log("i =", i, ", Hello", friend[i-1]);
}