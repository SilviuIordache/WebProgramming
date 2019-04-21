//TASK 10 Shuffle an array
let shuffle = function(arr){
    let newArr = arr.slice();
    newArr.fill('empty');
    let randomIndexPos = 0;
    let goodRandomNumber = false;
  
    for (let i = 0; i < arr.length; i++) {
      do {
        randomIndexPos = Math.floor(Math.random() * arr.length);
        if (newArr[randomIndexPos] == "empty"){
          goodRandomNumber = true;
          newArr[randomIndexPos] =  arr[i];
        }
      } while (goodRandomNumber == false)
      goodRandomNumber = false;
    }
  
    alert("newArr: " + newArr);
    arr = newArr.slice();
    alert("arr: " + arr);
}

//TASK 10 tests
let array = [1, 2, 3];
shuffle(array);
alert(array);

shuffle(array);
alert(array);

shuffle(array);
alert(array);


//mini tests
/*
let arr = [1, 2, 3];
let arr2 = [5, 7, 9];
arr2 = arr.slice();
alert("this is arr2: " + arr2);
let newArr = arr.slice();
newArr.fill(4, 0 ,3);
//alert(Math.floor(Math.random() * arr.length));
alert(newArr);
newArr = arr.slice();
arr.push(4);
//alert(newArr)
//alert(arr);
*/
