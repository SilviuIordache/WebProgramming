/*
//TASK 2 Filter Anagrams - couldnt figure out
let aclean = function(arr){
    
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (anagramCheck(arr[i], arr[j])){
                arr.splice(j,1);
            }
        }
    }
}

let anagramCheck = function(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    if (a.length == b.length){
        for (let char of a) {
            if (!b.includes(char))
                return false;
          }
    }
    else
        return false;
    return true;
};

//mini-tests
strTest = "abcdas";
//alert(strTest.length);
str1 = "Nap";
str2 = "PAN";
alert(anagramCheck(str1, str2));
let testArr = [1, 4, 8, 15]
testArr.splice(2, 1);
//alert(testArr);
*/



//web solution
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  
//TASK 2 tests
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );




