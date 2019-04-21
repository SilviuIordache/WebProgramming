//TASK 6 Create an extendable calculator ????
function Calculator(){

    let methods = {
      "+": (a,b) => (a + b),
      "-": (a,b) => (a - b),
    }
  
    this.calculate = function(str){
      return (str[2] == "+") ? +str[0] + +str[4] : +str[0] - +str[4];
    };
  
    this.addMethod = function(name, func){
  
    }
  }
  
  let calc = new Calculator;
  
  //alert(calc.calculate("3 - 7"));