// Control Structure

/*

Control Structure Type:
1. Sequence Structure : top > bottom, left > right
2. Condition Structure
3. Loop Structure

*/

// Condition Structure : If, Switch..Case
/* 

if(codition){
    statement;
}

*/

let age = 56;
let age_type = null;

if(age > 0 && age < 15){
    age_type = "kid";
    console.log("This person is", age_type)
}
else if(age >= 15 && age < 20){
    age_type = "teenager";
    console.log("This person is", age_type)
}
else if(age >= 20 && age < 60){
    age_type = "worker";
    console.log("This person is", age_type)
}
else if(age >= 20 && age < 60){
    age_type = "over 60 years old";
    console.log("This person is", age_type)
}
else{
    console.log("Age format was wrong")
}