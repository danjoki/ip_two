function processSubmit() {
  var date = document.getElementById("date");
  var gender = document.getElementById("gender");
  var dayOfTheWeek = dayOfTheWeek(date);

}


function dayOfTheWeek(date) {
    var weekDayNumber = date.getDay();
    var day = null;
    if(weekDayNumber === 0)
        day = "Sunday";
    else if(weekDayNumber === 1)
        day = "Monday";
    else if(weekDayNumber === 2)
        day = "Tuesday";
    else if(weekDayNumber === 3)
        day = "Wednesday";
    else if(weekDayNumber === 4)
        day = "Thursday";
    else if(weekDayNumber === 5)
        day = "Friday";
    else if(weekDayNumber === 6)
        day = "Saturday";
    return day;
}

