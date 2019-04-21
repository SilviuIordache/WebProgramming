//TASK 1

//My solution
let unique = function(arr) {
    let uniqueValues = new Set();
    for (let item of arr){
        //alert(item);  
        uniqueValues.add(item);
    }
    return Array.from(uniqueValues);
    
}

//Web solution
/*
function unique(arr) {
    return Array.from(new Set(arr));
  }
*/


//TASK 1 tests
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let set = Array.from(new Set(values));
alert(set);
//alert(unique(values) ); // Hare, Krishna, :-O