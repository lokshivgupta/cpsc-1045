function tempConvert(tempF) {
  // Convert Fahrenheit to Celsius
  return (tempF - 32) * (5 / 9);
}

let tempinF = +prompt("Enter temperature in Fahrenheit: ");

alert("Your temperature in Celsius is: " + tempConvert(tempinF) + "°C");