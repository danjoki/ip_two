function processSubmit() {
    console.log("In processing function")
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var resultBox = document.getElementById("result");
    var textToDisplay = "My Akan name is ";
    var day = dayOfTheWeekNumber(date);
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if(gender == "male"){
        resultBox.innerHTML = textToDisplay + maleNames[day];
    } else if(gender == "female"){
        resultBox.innerHTML = textToDisplay + femaleNames[day];
    } else {
        resultBox.innerHTML = "Something went wrong. Please try again";
    }
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

function dayOfTheWeekNumber(date) {
    return date.getDay();
}

