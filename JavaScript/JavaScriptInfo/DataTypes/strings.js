//Task 1
/* My version
let ucFirst = function(str){
    let firstCharString = str[0].toUpperCase();
    let restOfString = str.slice(1, str.length);
    let finalString = firstCharString + restOfString;
    return finalString;
}
*/

//Tutorial version
let ucFirst = function(str){
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

//console.log(ucFirst("blandiana"));


//Task 2

let checkSpam = function(str){
    if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
        return true;
    } else {
        return false;
    }
}

//console.log(checkSpam('buy ViAgRA now'));
//console.log(checkSpam('free xxxxx'));
//console.log(checkSpam("innocent rabbit"));


//Task 3
//my solution
let truncate = function(str, maxlength){
    let truncatedText = str.slice(0, maxlength);
    if (str.length > maxlength){
        return truncatedText + "…";
    }
    else return str;
    
}

//web solution
/*
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
*/

//console.log(truncate("abcd", 4));
//console.log(truncate("What I'd like to tell on this topic is:", 20)); //"What I'd like to te…"
//console.log(truncate("Hi everyone!", 20)); //"Hi everyone!"

function extractCurrencyValue(str){
    return +str.slice(1)
}

console.log(extractCurrencyValue("$140"));
 
