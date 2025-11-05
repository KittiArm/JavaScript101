// Break Continue

/*

Statement:
    1. break : Out of loop and end
    2. continue : Out of loop and restart

*/

let i = 1;
for(i; i<=10; i++){
    if(i==5) break;
    console.log("i =", i);
}

console.log("Program <count> was end");

let n = 1;
for(n; n<=10; n++){
    if(n==5) continue;
    console.log("n =", n);
}

console.log("Program <n> was end");