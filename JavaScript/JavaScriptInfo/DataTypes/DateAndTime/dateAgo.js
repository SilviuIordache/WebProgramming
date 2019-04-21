let getDateAgo = function(date, days){
    date.setDate(date.getDate() - days)
    return date.getDate();
}

//mini tests

let date = new Date(2015, 0, 2); // 2015, January, 2nd
//alert(date.getDate() - 3);


alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
