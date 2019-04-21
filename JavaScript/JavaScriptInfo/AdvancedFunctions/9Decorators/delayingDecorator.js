function f(x) {
    alert(x);
}

// decorator function
function delay(func, ms){
    
    return function(){
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

f(3);
console.log(f);

let f2 = delay(f, 3);
f2();
console.log(f2);
/*
// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
  
f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
*/