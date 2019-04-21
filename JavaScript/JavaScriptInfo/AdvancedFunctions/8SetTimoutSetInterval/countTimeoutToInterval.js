let i = 0;

let start = Date.now();

//Timeout Version
/*
function count() {

  if (i == 1000000000) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count);
  }

  // a piece of heavy job
  for(let j = 0; j < 1000000; j++) {
    i++;
  }

}
*/

//Interval Version
function count(){
    let lastIndex = i;
    setInterval(() => {
        for(let j = lastIndex; j < 1e7; j++) {
            i++;
        }
    }, 1000);
    if (i == 1e9) {
        alert("Done in " + (Date.now() - start) + 'ms');
    }
}


count();