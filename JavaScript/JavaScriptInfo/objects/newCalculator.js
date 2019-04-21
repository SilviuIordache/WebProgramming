function Calculator() {
    this.read = function(){ 
      this.val1 = prompt("Enter first value", 0);
      this.val2 = prompt("Enter second value", 0);
    };

    this.sum = function(){
      return Number(this.val1) + Number(this.val2);
    };

    this.mul = function(){
      return this.val1 * this.val2;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );