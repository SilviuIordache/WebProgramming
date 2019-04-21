// 1 setInterval variant
/*
function printNumbers(from, to){
    let i = from;
    let timerId = setInterval(
        function() {
            if (i <= to){
                console.log(i);
                i++;
            }
            else {
                clearInterval(timerId);
            }
        }, 1000)
}
*/

// 2 setTimeout variant
function printNumbers(from, to){
    let i = from;
    setTimeout( 
        function tick(){
            if (i <= to){
                console.log(i);
                i++;
                timerId = setTimeout(tick, 1000);
            }
        }, 1000)}

//Tests
printNumbers(3,7);