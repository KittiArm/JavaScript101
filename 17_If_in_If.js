// If in If

/*

if(condition 1){
    statement 1

    if(condition 2){
        statement 2
    }

}

*/

let age = 1;

if(age >=1){
    if(age>=7 && age<13){
        console.log("Elementary School");
    }
    else{
        console.log("Nursery")
    }
}
else if(age>=13 && age <= 15){
    if(age==15){
        console.log("Junior High School, Grade 9");
    }
    else if(age==14){
        console.log("Junior High School, Grade 8");
    }
    else if (age==13){
        console.log("Junior High School, Grade 7");
    }
}
else if(age>15){
    if(age==16){
        console.log("High School, Grade 10");
    }
    else if(age==17){
        console.log("High School, Grade 11");
    }
    else if (age==18){
        console.log("High School, Grade 12");
    }
    else{
        console.log("Collage Student");
    }
}
else{
    console.log("Age formattin gwas wrong");
}