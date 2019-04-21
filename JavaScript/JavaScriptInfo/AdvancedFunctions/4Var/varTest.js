if (true) {
    var a = true; // use "var" instead of "let"
    let b = true
  }
  
//alert(a); // true, the variable lives after if
//alert(b); //error: undefined, let unreachable from the if{} block

function sayHi() {
    phrase = "Hello"; // (*)
  
    if (false) {
      var phrase = "Suprise";
    }
  
    alert(phrase);
}

sayHi();