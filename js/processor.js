function nameGeneratorAlgorithm(resultHolder, resultBox, version, gender, date, day) {
    console.log("gender: "+gender+" Date: "+date+" day: "+day);
    // let resultHolder = document.getElementById("resultHolder");
    // let resultBox = document.getElementById("result");
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let textToDisplay0 = "You were born on a <b>";
    resultHolder.style.display = "block";
    if (gender == "male") {
        resultBox.innerHTML = "Version <b>" + version + "</b>: " + textToDisplay0 + weekDay(date) + "</b> and your Akan male name is <b>" + maleNames[day] + "</b>";
    } else if (gender == "female") {
        resultBox.innerHTML = "Version <b>" + version + "</b>: " + textToDisplay0 + weekDay(date) + "</b> and your Akan female name is <b>" + femaleNames[day] + "</b>";
    } else {
        resultBox.innerHTML = "Something went wrong. Please try again";
    }
}

function versionOneSubmit() {
    let resultHolder = document.getElementById("resultHolder");
    let resultBox = document.getElementById("result");
    console.log("In processing submit function");
    let gender = document.getElementById("gender").value;
    console.log("Gender: " + gender);
    let date = document.getElementById("date").value;
    console.log("Date: " + date);
    let genderValidate = validateValue(gender);
    let dateValidate = validateValue(date);
    if(dateValidate === true){
        if(genderValidate === true){
            let day = dayOfTheWeekNumber(date);
            nameGeneratorAlgorithm(resultHolder, resultBox, "one", gender, date, day);
        } else {
            resultHolder.style.display = "block";
            resultBox.innerHTML = "Please select gender.";
        }
    } else {
        resultHolder.style.display = "block";
        resultBox.innerHTML = "Please select Date.";
    }
}

function versionTwoSubmit() {
    let resultHolder = document.getElementById("resultHolder1");
    let resultBox = document.getElementById("result1");
    console.log("In processing version two submit function");
    let theDay = document.getElementById("theDay").value;
    console.log("Day: " + theDay);
    let month = document.getElementById("month").value;
    console.log("month: " + month);
    let year = document.getElementById("year").value;
    console.log("year: " + year);
    let gender = document.getElementById("gender-two").value;
    console.log("Gender: " + gender);
    let dayValid = validateDay(theDay);
    let monthValid = validateMonth(month);
    let yearValid = validateYear(year);
    let genderValid = validateValue(gender);
    if(dayValid === true) {
        if(monthValid === true){
            if(yearValid) {
                if (genderValid === true) {
                    let constructDate = year + "-" + month + "-" + theDay;
                    console.log("Date: " + constructDate);
                    let dayNumber = dayOfTheWeekNumber(constructDate);
                    if (month == 2) {
                        if (isLeapYear(year) && !validateFebruaryForLeapYear(theDay)) {
                            resultHolder.style.display = "block";
                            resultBox.innerHTML = "February for leap year must have 29 days or less.";
                            document.getElementById("theDay").value = '';
                        } else if(!isLeapYear(year) && !validateFebruaryForNonLeapYear(theDay)){
                            resultHolder.style.display = "block";
                            resultBox.innerHTML = "February for non leap year must have 28 days or less.";
                            document.getElementById("theDay").value = '';
                        } else {
                            nameGeneratorAlgorithm(resultHolder, resultBox, "two", gender, constructDate, dayNumber);
                        }
                    } else {
                        nameGeneratorAlgorithm(resultHolder, resultBox, "two", gender, constructDate, dayNumber);
                    }
                } else {
                        resultHolder.style.display = "block";
                        resultBox.innerHTML = "Please select gender.";
                }

            } else {
                resultHolder.style.display = "block";
                resultBox.innerHTML = "Please enter the correct Year";
                document.getElementById("year").value = '';
            }
        } else {
            resultHolder.style.display = "block";
            resultBox.innerHTML = "Please enter the correct Month";
            document.getElementById("month").value = '';
        }
    } else {
        resultHolder.style.display = "block";
        resultBox.innerHTML = "Please enter the correct day";
        document.getElementById("theDay").value = '';
    }
}

function isLeapYear(year) {
    console.log("One: "+year%4+" Two: "+year%400+" Three: "+year%100);
    if(year%4 == 0 || (year%400 == 0 && year%100 != 0))
        return true;
    return false;
}

function validateValue(value) {
    console.log("Gender Value: "+value)
    if(value === "") {
        return false;
    }
    return true;
}

function validateDay(theDay) {
        if (theDay >= 1 && theDay <= 31) {
            return true;
        }
    return false;
}

function validateFebruaryForLeapYear(theDay) {
    if (theDay >= 1 && theDay <= 29) {
        return true;
    }
    return false;
}

function validateFebruaryForNonLeapYear(theDay) {
    if (theDay >= 1 && theDay <= 28) {
        return true;
    }
    return false;
}

function validateMonth(month) {
    if(month >= 1 && month <=12){
        return true;
    }
    return false;
}

function validateYear(year) {
    let date = new Date();
    console.log("Date: "+date);
    console.log("Year: "+date.getFullYear())
    if(year >= 1900 && year <= date.getFullYear()){
        return true;
    }
    return false;
}

var dayOfTheWeekNumber = (date) => {
    let theDay = new Date(date);
    console.log("Number for date: "+theDay)
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