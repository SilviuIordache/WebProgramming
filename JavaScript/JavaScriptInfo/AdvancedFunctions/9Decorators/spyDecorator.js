function work(a, b) {
    console.log( a + b ); 
}

//My attempt
/*
function spy(func) {
    let calls = new Map();
    
    return function(){
        let key = hash(arguments);
        let result = func.apply(this, arguments);

        calls.set(key, result);
        return result;
    }
}
*/

function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}

function hash() {
    [].join.call(arguments); // 1,2
}

//work(2,3);
//console.log(work);

//Decoration
work = spy(work);

//Calls
work(5,6);
work(3,6);
work(7,23);
work(8,20);

//List cached calls
for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

