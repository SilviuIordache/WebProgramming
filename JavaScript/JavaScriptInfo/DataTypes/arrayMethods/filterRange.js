//Task 2 Filter range
function filterRange(arr, a, b) {
    return arr.filter( item => item >= a && item <= b);
  }

  
//Task 2 tests
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
