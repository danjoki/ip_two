function processSubmit() {
    let resultHolder = document.getElementById("resultHolder");
    let resultBox = document.getElementById("result");
    console.log("In processing submit function");
    let gender = document.getElementById("gender").value;
    console.log("Gender: " + gender);
    let date = document.getElementById("date").value;
    console.log("Date: " + date);
    let textToDisplay0 = "You were born on a <b>";
    let day = dayOfTheWeekNumber(date);
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    resultHolder.style.display = "block";
    if (gender == "male") {
        resultBox.innerHTML = textToDisplay0 + weekDay(date) + "</b> and your Akan male name is <b>" + maleNames[day] + "</b>";
    } else if (gender == "female") {
        resultBox.innerHTML = textToDisplay0 + weekDay(date) + "</b> and your Akan female name is <b>" + femaleNames[day] + "</b>";
    } else {
        resultBox.innerHTML = "Something went wrong. Please try again";
    }
}
function dayOfTheWeekNumber(date) {
    let theDay = new Date(date);
    return theDay.getDay();
}

var weekDay = (date) => {
    let theDay = new Date(date);
    let weekDayNumber = theDay.getDay();
    let day = null;
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