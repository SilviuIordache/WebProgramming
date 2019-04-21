//Task 3 Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
      if (item < a || item > b) {
        arr.splice(index, 1);
      }
    });
}
  
//Task 3 Web solution
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

//Task 3 tests
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

  