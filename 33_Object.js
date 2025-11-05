// JavaScript Object

// let objectName = {propertyName: value}

let user = {
    _name:"Mink",
    _year:2001,
    _prov:"Surat"
};

console.log(user);
console.log(user._prov); // objectName.propertyName


// Method
let user2 = {
    _name:"Mink",
    _year:2001,
    _prov:"Surat",
    display:function(){
        return user2._name+" was born in "+user2._prov;
    }
};

console.log(user2.display());
document.write(user2.display());