'use strict';
//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

//Calculate a value
function square(number){
    return number * number;
}

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }

function checkAgeTernary(age) {
    return(age > 18) ? true : confirm('Do you have consent?');
}

function min(a,b) {
    return (a > b) ? a : b;
}

function pow(x,n) {
    return x ** n;
}

function powCalculate() {
    let x = 0;
    let n = -1;
    alert("This function will calculate x to the power of n");
    x = prompt("Enter value for x: ")
    while (n < 1) {
        n = prompt("Enter value for n");
        if (n < 1)
            alert("n needs to be integer value bigger than 1");
    } 
    return alert(pow(x,n));
}

function sayHi() {
    alert("Hello!");
}


// let x= sayHi;

// sayHi();
// x();
// alert(x);
// alert(typeof(x));

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );


// ask("Do you agree?",
//         () => alert("You agreed."),
//         () => alert("You canceled the execution.")
//    );

// alert(prompt("x? "));

// alert(null == null);
// alert(undefined == null);
// alert(null == undefined);
// alert(undefined == undefined);
alert(typeof(prompt()));