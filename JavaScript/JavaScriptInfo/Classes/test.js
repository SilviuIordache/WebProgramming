class User {

    constructor(name) {
      // invokes the setter
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
  }
  
  let user = new User("Jon");
  alert(user.name); // John
 user.name("Billy");
  alert(user.name);
  
  user = new User(""); // Name too short.