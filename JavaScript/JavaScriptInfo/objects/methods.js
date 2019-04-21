let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(this.name);
    }
  
  };
  
  //user.sayHi(); // John

  let obj, method;

  obj = {
    go: function(){
      
      alert(this);
      console.log(this);
    }
  };

  obj.go();