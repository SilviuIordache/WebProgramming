//My long ass, but correct solution
function getLastDayOfMonth(year, month){
    let bigMonths = [0, 2, 4, 6, 7, 9, 11];

    let isLeapYear = function(year) {
        if ( year % 4 != 0){
            return false
        } else if ( year % 100 != 0) {
            return true;
        } else if ( year % 400 != 0) {
            return false;
        } else {
            return true;
        }
    }
    
    if (bigMonths.includes(month)){
        return 31;
    } else if (month == 1) { //February case{
        if (isLeapYear(year)){
            return 29
        } else {
            return 28;
        }
    } else {
        return 30;
    }
}


//Web solution
function getLastDayOfMonth2(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

//tests
alert(getLastDayOfMonth2(1900, 1));

//alert(isLeapYear(1900));