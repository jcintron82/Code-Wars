// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(string) {
    const fullTime = string.slice(0,8)
        string = fullTime 
    const hourValue = string.slice(0,2)
    const formattedHour = (parseInt(hourValue) + 12)
    const finalTime = formattedHour + string.substr(2);
    return finalTime
};

