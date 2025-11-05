// Do...While

/*

do{
    statement;
}while(condition);

Usage : When we need to try once, and do the loop while condition is true.

Statement:
    1. break : Out of loop and end
    2. continue : Out of loop and restart

*/

let count = 1;

do{
    console.log("Hello", count);
    count++;
}while(count<=5)