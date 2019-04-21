//TASK 5 Copy and sort array

//My solution
function copySorted(arr) {
    let newArr = arr.map(item => item);
    return newArr.sort();
  }
  
//Web solution
function copySorted(arr) {
return arr.slice().sort();
}
  

//TASK 5 tests
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

let numbers = [0,2,-2,4,2];
alert(numbers.slice().sort());
