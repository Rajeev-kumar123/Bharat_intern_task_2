const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput = function () {
  let inputTemperatureUnitValue = inputTemperatureUnit.value;
  let resultTemperatureUnitValue = resultTemperatureUnit.value;

  let CelciusToKelvin = inputTemperatureUnitValue === "Celcius" && resultTemperatureUnitValue === "Kelvin";
  let CelciusToFahrenheit = inputTemperatureUnitValue === "Celcius" && resultTemperatureUnitValue === "Fahrenheit";

  let KelvinToCelcius = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Celcius";
  let KelvinToFahrenheit = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Fahrenheit";

  let FahrenheitToCelcius = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celcius";
  let FahrenheitToKelvin = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Kelvin";

  let sameUnits = inputTemperatureUnitValue === resultTemperatureUnitValue;

  let inputTemperatureValue = temperature.value;
  let convertTemperature = 0;

  if(CelciusToKelvin) {
    convertTemperature = (inputTemperatureValue * 1) + 273.15;
    result.value = convertTemperature.toFixed(2);
  }
  else if (CelciusToFahrenheit) {
    convertTemperature = (9/5 * inputTemperatureValue) + 32;
    result.value = convertTemperature.toFixed(2);
  }
  else if (KelvinToCelcius) {
    convertTemperature = (inputTemperatureValue - 273.15);
    result.value = convertTemperature.toFixed(2);
  }
  else if (KelvinToFahrenheit) {
    convertTemperature = 9/5 * (inputTemperatureValue - 273.15) + 32;
    result.value = convertTemperature.toFixed(2);
  }
  else if (FahrenheitToCelcius) {
    convertTemperature = 5/9 * (inputTemperatureValue - 32);
    result.value = convertTemperature.toFixed(2);
  }
  else if (FahrenheitToKelvin) {
    convertTemperature = 5/9 * (inputTemperatureValue - 32) + 273.15;
    result.value = convertTemperature.toFixed(2);
  }
  else if (sameUnits) {
    result.value = inputTemperatureValue;
  }
}