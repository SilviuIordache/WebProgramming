function formatDate (date){
    let currTime = new Date();

    let deltaSS = currTime.getSeconds() - date.getSeconds();
    let deltaMM = currTime.getMinutes() - date.getMinutes();
    let deltaHH = currTime.getHours()   - date.getHours();

    alert("deltaSS: " + deltaSS);
    alert("deltaMM: " + deltaMM);
    alert("deltaHH: " + deltaHH);

    let min= date.getMinutes();
    let hh = date.getHours();

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() % 100;

    if (deltaHH == 0)
    {
        if (deltaMM == 0){
            if (deltaSS < 1){
                return "right now";
            } else {
                return `${deltaSS} sec ago.`;
            }
        } else {
            return `${deltaMM} min ago`;
        }   
    } else {
        return `${dd}.${mm}.${yy} ${hh}:${min}`;
    }
}

//Actual Task tests
//alert( formatDate(new Date(new Date - 1)) ); // "right now"
//alert( formatDate(new Date(new Date - 1000 * 30)) ); // "30 sec. ago"
//alert( formatDate(new Date(new Date - 1000 * 5 * 60)) ); // "5 min. ago"
// yesterday's date like 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 1000 * 85399)) );
//alert( formatDate(new Date(new Date - 1000 * 86400)) );

//mini tests
/*
let currTime = new Date();
let oneSecDiff  = new Date(currTime - 1000 * 1); 
let oneMinDiff  = new Date(currTime - 1000 * 60);
let oneHourDiff = new Date(currTime - 1000 * 3600);

alert(currTime.getFullYear() %100);

console.log(currTime);
console.log(oneSecDiff);
console.log(oneMinDiff);
console.log(oneHourDiff);
*/
