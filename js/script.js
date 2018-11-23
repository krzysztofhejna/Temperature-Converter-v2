'use strict';
var button_1 = document.getElementById('converterCtoF__button');
var output_1 = document.getElementById('converterCtoF__output');
var tidbit_1 = document.getElementById('converterCtoF__tidbit');
var button_2 = document.getElementById('converterFtoC__button');
var output_2 = document.getElementById('converterFtoC__output');
var tidbit_2 = document.getElementById('converterFtoC__tidbit');
var temperatureC;
var temperatureF;
button_1.addEventListener('click', function(){

    temperatureC = window.prompt('What is the temperature in Celcius?');
    if (temperatureC && !isNaN(temperatureC) && temperatureC > -273.15) {
        temperatureF = 1.8 * temperatureC + 32;
        output_1.innerHTML =(temperatureC + ' degrees Celcius is ' + temperatureF + ' degrees Fahrenheit.<br><br');
        if (temperatureC < 0) {
            tidbit_1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a solid state.<br><br>');
        } else if (temperatureC >= 0 && temperatureC < 100) {
            tidbit_1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a liquid state.<br><br>');
        } else {
            tidbit_1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a vapor state.<br><br>');
        }
    }
    else {
        alert('Please enter a valid temperature in Celcius');
    };
});

button_2.addEventListener('click', function(){

    temperatureF = window.prompt('What is the temperature in Fahrenheit?');
    if (temperatureF && !isNaN(temperatureF) && temperatureF > -459.67) {
        temperatureC = 5 * (temperatureF - 32)/9;
        output_2.innerHTML =(temperatureF + ' degrees Fahrenheit is ' + temperatureC + ' degrees Celsius.<br><br');
        if (temperatureF < 32) {
            tidbit_2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a solid state.<br><br>');
        } else if (temperatureF >= 32 && temperatureF < 212) {
            tidbit_2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a liquid state.<br><br>');
        } else {
            tidbit_2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a vapor state.<br><br>');
        }
    }
    else {
        alert('Please enter a valid temperature in Celcius');
    };
});