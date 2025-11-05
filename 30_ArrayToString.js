// Convert array to string

/*

1. .toString() : convert array to string
2. .join(" separator ") : concat array member with separator
3. .pop() : remove last member out of array

*/

let letter = ["AA", "BB", "CC", "DD"];
console.log(typeof(letter));
console.log(letter);

// .toString()
let _toString = letter.toString();
console.log(typeof(_toString));
console.log(_toString);

// .join(" separatot ")
let _join = letter.join(" | ");
console.log(typeof(_join));
console.log(_join);

// .pop()
letter.pop();
console.log(letter);