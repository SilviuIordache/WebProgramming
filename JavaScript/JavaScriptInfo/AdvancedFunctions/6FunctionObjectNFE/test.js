function sayHi() {
    counter = 0;
    alert("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
}

sayHi.counter = 0; // initial value
  
sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times
sayHi.counter = 10; // initial value

sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times