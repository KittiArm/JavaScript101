// Variable Scope

/*

1. Local Variable : Variable is working in their function only.
2. Global Variable : Variable is working in their workbook.

*/

let a = 100; // a is global variable

function display(){
    console.log(a); // a is global variable
    let b = 200; // b is local variable
}