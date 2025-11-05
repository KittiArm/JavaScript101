// While Loop

/*

While(condition){
    statement;
}

Usage : When we do not know the number of loop.

Statement:
    1. break : Out of loop and end
    2. continue : Out of loop and restart

*/

let friend = Array("Mink", "Punch", "Mingu", "Bonus")

let count = 1;
while(count <= 4){
    console.log("Count =", count, ", Hello", friend[count-1]);
    count++;
}

let i = 1;
while(true){
    if(i===200) break;
    i++;
    console.log(i);
}