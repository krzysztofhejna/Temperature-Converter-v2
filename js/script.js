'use strict';
var output = document.getElementById('converter__output');
var button = document.getElementById('converter__button');
var temperatureC;
var temperatureF;

button.addEventListener('click', function(){

    temperatureC = window.prompt('What is the temperature in Celcius?');
    if (temperatureC && !isNaN(temperatureC) && temperatureC > -273.15) {
        temperatureF = 1.8 * temperatureC + 32;
        output.innerHTML = (temperatureC + ' degrees Celcius is ' + temperatureF + ' degrees Fahrenheit.'+'<br><br') + output.innerHTML;
    }
    else {
        alert('Please enter a valid temperature in Celcius');
    }
});