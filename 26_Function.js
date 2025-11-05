// Function

/*
1. Normal Function
    Set:
    function name(){
        statement;
    }

    Usage:
    name();
*/
console.log("Function Type 1");

function print(){
    console.log("Hello world");
}
print();

function message(){
    alert("Hi !!!!!!!!");
}

/*
2. Received Value Function
    Set:
    function name(para1, para2, ...){
        statement;
    }

    Usage:
    name(argrument1, argrument2, ..,);
*/

console.log("Function Type 2");

function addnumber(x){ // x is parameter
    console.log("Number is", x);
}
addnumber(15); // 15 is argrument

function fullName(fname, lname, age){
    console.log("Firstname =", fname, ", Lastname =", lname, "Age =", age);
}
fullName("Kittipong", "Chankhotr")

/*
3. Returned Value Function
    Set:
    function name(){
        return statement;
    }
*/

console.log("Function Type 3");

function getIP(){
    return "192.168.1.198";
}
let myIP = getIP();
console.log("My IP is", myIP);

function getNumber(){
    return 100*100;
}
let total = getNumber();
console.log("The result is", total);

/*
4. Received and Returned Value Function
    Set:
    function name(para1, para2, ...){
        return statement;
    }
*/

console.log("Function Type 4");

function salary(money){
    let bonus = 1000;
    return money+bonus;
}
let totalSalary = salary(15000);
console.log(totalSalary);

/*
5. Function with initial value
    Set:
    function name(para1 = vlaue1, para2 = value2, ...){
        statement;
    }
*/

console.log("Function Type 5");

function fullName(fname = "Kitipong", lname = "Chankhotr", age = 24){
    console.log("Firstname =", fname, ", Lastname =", lname, "Age =", age);
}

fullName();