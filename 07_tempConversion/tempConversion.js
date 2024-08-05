const convertToCelsius = function(fahrenheitTemp) {

  const celsius = (fahrenheitTemp - 32) / 1.8;

  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {

  const fahrenheit = celsiusTemp * 1.8 + 32;

  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
