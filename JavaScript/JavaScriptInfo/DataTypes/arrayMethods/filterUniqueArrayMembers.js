//TASK 12
let unique = function(arr){
    let newArr = [];
    for (let str of arr) {
        if (!newArr.includes(str)) {
            newArr.push(str);
        }
    }
    return newArr;
}


//TASK 12 tests
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

//mini-tests
let arr = [];
alert(arr.length);