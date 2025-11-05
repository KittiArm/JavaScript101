// Confirm Dialog

function deleteData(){
    let result = confirm("Do you need to delete data?");
    if(result){
        console.log("Delete Data");
    }else{
        console.log("Cancel");
    }
}