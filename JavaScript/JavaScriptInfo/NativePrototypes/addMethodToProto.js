function f() {
    alert("Hello!");
}


Function.prototype.defer = function(ms) {
    return setTimeout(this, ms);
}

f.defer(1000); // shows "Hello!" after 1 second