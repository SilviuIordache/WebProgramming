//1
let sumOfTwoEntries = function(){
    let x = +prompt("x: ");
    let y = +prompt("y: ");
    alert( x + y);
}

//sumOfTwoEntries();

//2
//alert( (Math.round(6.35 * 10)/ 10).toFixed(1)); // 6.3

//3

let readNumber = function(){
    let x;
    do{
        x = prompt("enter a number: ");
    }while((typeof x) != "number");
    //}while(x != "a");
}

//readNumber();

let testNumber = function() {
    let x = prompt("enter a number: ");
    console.log(`x: ${x}`);
    console.log(`typeof x: ${typeof x}`);
    console.log(`parseInt(x): ${parseInt(x)}`);
    console.log(`typeof parseInt(x): ${typeof parseInt(x)}`);
    console.log(`(typeof parseInt(x)) === "number": ${(typeof parseInt(x)) === "number"}`);
    console.log(`(typeof x) === "number": ${(typeof x) === "number"}`);
    console.log(`typeof a == typeof 3: ${typeof "a" == typeof 3} `);
}

//testNumber();

let random = function(min, max){
    let randomNumber = Math.random() * (max - min) + min;
    console.log(randomNumber);
}

//random(3,7);
//random(3,7);
//random(12,16);
//random(12,16);

let randomInteger = function(min, max){
    let randomNumber = min + Math.random() * (max + 1- min) ;
    return Math.floor(randomNumber);
}

console.log(randomInteger(3,7));
console.log(randomInteger(3,7));
console.log(randomInteger(12,16));
console.log(randomInteger(12,16));

console.log("asd\bas\fda");