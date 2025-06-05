const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0) return "ERROR"
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }

    if (number2 > number1) [number1, number2] = [number2, number1]

    if (number1 - number2 > 0) {
        max = number1
        min = number2
    } else {
        max = number2
        min = number1
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
