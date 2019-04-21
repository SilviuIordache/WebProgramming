//1
styles = ["Jazz", "Blues"];
//console.log(styles);
styles.push("Rock&Roll");
//console.log(styles);
styles[Math.floor(styles.length - 1 /2)] = "Classics";
//console.log(styles);
styles.shift();
//console.log(styles);
styles.unshift("Rap", "Reggae");
//console.log(styles);

//2
function sumInput(){
    let sumArray = [];
    let sum = 0;
    let x = "a";
    do {
        x = prompt("number to add: ");
        sumArray.push(x);
    }while (isFinite(x) && x != null && x != "")

    for (let item of sumArray){
        sum += +item;
    }

    alert(sum);
}
//sumInput();

//3
function getMaxSubSum(arr) {
    let maxSubArraySum = 0;
    let tempSum        = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            tempSum += arr[j];
            if (tempSum > maxSubArraySum) {
                maxSubArraySum = tempSum;
            }
        }
        tempSum = 0;
    }
    console.log(maxSubArraySum);
}

getMaxSubSum([-1, 2, 3, -9]) //= 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9])// = 6
getMaxSubSum([-1, 2, 3, -9, 11]) //= 11
getMaxSubSum([-2, -1, 1, 2]) //= 3
getMaxSubSum([100, -9, 2, -3, 5])// = 100
getMaxSubSum([1, 2, 3]) //= 6 (take all)
getMaxSubSum([3, -1, 5, -2, 20]) //= 25 (take all)

getMaxSubSum([-1, -2, -3]) //= 0



