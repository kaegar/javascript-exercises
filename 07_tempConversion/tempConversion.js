const convertToCelsius = function (temp) {
    int = ((temp - 32) * (5 / 9)).toFixed(1);
    return Math.round(int * 10)/10;
};

const convertToFahrenheit = function (temp) {
    int = (temp * (9 / 5) + 32).toFixed(1);
    return Math.round(int * 10)/10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
