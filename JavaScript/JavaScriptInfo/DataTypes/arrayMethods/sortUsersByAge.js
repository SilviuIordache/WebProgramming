//TASK 9 Sort users by age

//My solution
let sortByAge = function(arr){
  arr.sort( (a, b) => a.age - b.age)
}
sortByAge(arr);


//Web solution
function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}


//TASK 9 tests
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete