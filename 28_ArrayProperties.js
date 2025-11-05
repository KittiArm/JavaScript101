// Array Properties

let color = ["Red", "Blue", "Yellow", "White"];
console.log("Before sort :", color)

let _length = color.length; // .length : count array member
let _sort = color.sort(); // .sort() : sort member
let first = color[0]; // seleced first member
let last = color[color.length-1]; // selected last member

console.log("Number fo this array :", _length);
console.log("Sort :", _sort);
console.log("First member :", first);
console.log("Last member :", last);

color.push("Pink"); // .push : add member to array
console.log(color);

let _sort2 = color.sort();
let _reverse = _sort2.reverse(); // .reverse() : reverse sort member
console.log(_reverse);