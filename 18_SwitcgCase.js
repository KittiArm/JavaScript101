// Switch...Case

/*

switch(condition){
    case value 1 : statement 1;
        break;
    case value 2 : statement 2;
        break;
        .
        .
        .
    case value n : statement n;
        break;
    defult : statement defult
}

*/

let status = false; // false is off, true is on
let light;

switch(status){
    case false : light = "Turn Off";
        break;
    case true : light = "Turn On";
        break;
    default : light = "Status was wrong"   
}

console.log(light)