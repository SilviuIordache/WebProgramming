//Task 4 Sort in the reverse order
let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in the reverse order
function sortArrayInReverseOrder(arr){
    arr.sort(function(a, b){return a - b});
  }

//Task 4 tests
sortArrayInReverseOrder(arr);
alert( arr ); // 8, 5, 2, 1, -10