// Order member in array

/*
Order Letter
    .sort() : A to Z
    .reverse() : Z to A
 */


// Order Number

let points = [20 ,200, -200, 5, -25, 10];
console.log("Beafore :", points);

points.sort(function(a, b){
    return a - b;
}); // less ot more
console.log("less to great :", points);

points.sort(function(a, b){
    return b - a;
}); // less ot more
console.log("great to less :", points);