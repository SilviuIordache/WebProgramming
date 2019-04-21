// animal has methods
let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  console.log(rabbit.isSleeping);
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping);
  /*
  alert(rabbit.isSleeping); // true
  alert(animal.isSleeping); // undefined (no such property in the prototype)
  */