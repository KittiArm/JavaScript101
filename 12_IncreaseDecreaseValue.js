// Increase Decrease Value

/*

++ (Prefix) : ++a : add +1 >> use
++ (Postfix) : a++ : use >> add +1
-- (Prefix) : --b : devalue -1 >> use
-- (Postfix) : b-- : use >> devalue -1

*/

let a = 5, b = 10;

// Prefix add
console.warn("Prefix add");
console.log("Before a =", a);
console.log("Prefix a =", ++a);
console.log("Now a =", a);

// Postfix add
a = 5; // reset
console.warn("Postfix add");
console.log("Before a =", a);
console.log("Postfix a =", a++);
console.log("Now a =", a);


// Prefix devalue
console.warn("Prefix devalue");
console.log("Before b =", b);
console.log("Prefix b =", --b);
console.log("Now b =", b);

// Postfix devalue
b = 10; // reset
console.warn("Postfix devalue");
console.log("Before b =", b);
console.log("Postfix b =", b--);
console.log("Now b =", b);