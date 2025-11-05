// Access Array

// For Loop
let color = ["Red", "Blue", "White", "Pink"];
let count = color.length;

for(let i = 0; i<count; i++){
    console.log((i+1)+" = "+color[i]);
}

// For Each
let letter = ["AA", "BB", "CC", "DD"];
letter.forEach(myData);

function myData(item){
    console.log(item);
}