"use strict"
//-------------------------------------
let user = {};
user.name = "John";
//alert(user.name)
user.surname = "Smith";
user.name = "Pete";
//alert(user.name)
delete user.name;
//alert(user.name)
//-------------------------------------



//-------------------------------------
let schedule = {};
//alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
//alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
//-------------------------------------

//-------------------------------------
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}


    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }


//alert(sum);
//-------------------------------------

//-------------------------------------
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
displayObjKeysAndValues(menu);

//alert(menu.width);
//alert(menu.height);
// after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

function multiplyNumeric (obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number')
            obj[key] *= 2;
    }
}

function displayObjKeysAndValues(obj) {
    for (let key in obj) {
        alert(key);
        alert(obj[key]) 
    }
}
//-------------------------------------
