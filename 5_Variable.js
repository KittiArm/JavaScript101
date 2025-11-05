// Variable

/*

The rules to set variable name
1. Do not start with number or special letterr
2. But it can start with Dollar sign($) or Underscore(_)
3. Variable name is the sensitive case
4. Can not set a variable name as the same with Keyword
    if, else, for

Variable in JavaScript is the Dynamic Typing
Dynamic Typing: The variable type can be any type following its value (must not set variable type before)

*/
// Variable  with let can change their value
let money1;
let money2=100;

let a, b, c, d;
let x=10, y=20, z=30;
// Any viriable without value must automatically be "undefined"


// Variable with const can bo change their constant
const thaibth=100;

document.write("Innitial money2 = ",money2, "<br>");
money2=200;
document.write("After money2 = ",money2);
console.log("thaibht = ", thaibth)
console.error(x);
console.warn(y);