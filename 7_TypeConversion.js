// Type Conversion

// string --> number
let age = "24";
console.log("age is", typeof(age));

let int_age = parseInt(age);
console.log("int_age is", typeof(int_age));

let float_age = parseFloat(age);
console.log("float_age is", typeof(float_age));

// number --> string
let price = 550;
console.log("price is", typeof(price));

let str_price = price+"";
console.log("str_price is", typeof(str_price));

let tostr_price = price.toString();
console.log("tostr_price is", typeof(tostr_price));