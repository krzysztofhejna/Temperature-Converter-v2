'use strict';
var button = document.getElementById('converter__button');
var output = document.getElementById('converter__output');
var tidbit = document.getElementById('tidbit');
var temperatureC;
var temperatureF;

button.addEventListener('click', function(){

    temperatureC = window.prompt('What is the temperature in Celcius?');
    if (temperatureC && !isNaN(temperatureC) && temperatureC > -273.15) {
        temperatureF = 1.8 * temperatureC + 32;
        output.innerHTML =(temperatureC + ' degrees Celcius is ' + temperatureF + ' degrees Fahrenheit.<br><br');
        if (temperatureC < 0) {
            tidbit.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a solid state.<br><br>');
        } else if (temperatureC >= 0 && temperatureC <100) {
            tidbit.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a liquid state.<br><br>');
        } else {
            tidbit.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a vapor state.<br><br>');
        }
    }
    else {
        alert('Please enter a valid temperature in Celcius');
    };
});