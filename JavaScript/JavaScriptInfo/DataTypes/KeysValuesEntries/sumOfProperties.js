//TASK 1 - count number of properties in an object

//solution 1
/*
let count = function(user) {
let numberOfKeys = 0;
for (let key of Object.values(user)){
    numberOfKeys += 1;
}
return numberOfKeys;
}
*/

//solution 2
let count = function(user) {
    return Array.from(Object.keys(user)).length;
}

//web solution
function count(obj) {
    return Object.keys(obj).length;
}

//Task Tests
let user = {
    name: 'John',
    age: 30
};
alert(count(user)); // 2