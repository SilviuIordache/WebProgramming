let calculator = {
    read(){ 
      this.val1 = prompt("Enter first value", 0);
      this.val2 = prompt("Enter second value", 0);
    },
    sum(){
      return Number(this.val1) + Number(this.val2);
    },
    mul(){
      return this.val1 * this.val2;
    }
  }
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );