function getSecondsToday(){
    let today = new Date();
    let dd = today.getDate();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();

    return hh * 3600 + mm * 60 + ss;
}

alert(getSecondsToday());

