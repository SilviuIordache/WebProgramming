//Task 1 - Create a date. 
//Note: months start from 0 (jan = 0, feb = 1, mar = 2, etc.)
//let date = new Date(2012, 1, 20, 3, 12, 0);

//Task 1 tests
//alert(date.getDay());


//Task 2 - Show weekday
let getWeekDay = function(date) {
    let day = "";
    switch(date.getDay()) {
        case 0:
            day = "MO";
            break;
        case 1:
            day = "TU";
            break;
        case 2:
            day = "WE";
            break;
        case 3:
            day = "TH";
            break;
        case 4:
            day = "FR";
            break;
        case 5:
            day = "SA";
            break;
        case 6:
            day = "SU";
            break;
        default:
            break;
    }
    return day;
}

//task 2 tests
//let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
//alert( getWeekDay(date2) );        // should output "TU"


//Task 3 - European weekday
let getLocalDay = function(date){
    if (date.getTime() != 0)
        return date.getDay();
    else 
        return 7;
}

//Task 3 tests
//get time:
//0  1  2  3  4  5  6
//SU MO TU WD TH FR SA

//get localtime
//1  2  3  4  5  6  7
//MO TU WD TH FR SA SU
let date1 = new Date(2019, 2, 4);  // 3 Jan 2012
let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date2));       // tuesday, should show 2
