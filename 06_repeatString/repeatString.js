const repeatString = function(stringToRepeat, timesToRepeat) {
    if (timesToRepeat < 0) return "ERROR";
    let repeatedString = "";
    for (let i = 0; i < timesToRepeat; i++) {
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
