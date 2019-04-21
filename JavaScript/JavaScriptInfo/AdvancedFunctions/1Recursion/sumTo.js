function sumToLoop(n){
    let sum = 0;
    for (let i = 1; i <= n; i ++)
        sum += i;
    return sum;
}

function sumToRecursion(n){
    if (n > 1) {
        return n + sumToRecursion(n - 1);
    } else {
        return 1;
    }
}

function sumToAritProg(n){
    return n * (1 + n) / 2;
}


function testFunctionSpeed(func, n) {
    let startTime = Date.now();
    for (let i = 1; i <= n; i++){
        func(i);
    }
    
    let endTime = Date.now();
    console.log(`Sum of first ${n} numbers took ${endTime - startTime} ms using ${func.name}`);
}


let sumToNumber = 100000;
testFunctionSpeed(sumToLoop, sumToNumber);
testFunctionSpeed(sumToRecursion, sumToNumber);
testFunctionSpeed(sumToAritProg, sumToNumber);