'use strict';
var button1 = document.getElementById('converterCtoF-btn');
var converterCtoF = document.getElementById('converterCtoF')
var button2 = document.getElementById('converterFtoC-btn');
var converterFtoC = document.getElementById('converterFtoC')
var temperatureC;
var temperatureF;

button1.addEventListener('click', function(){
    var minC = -273.15 // absolute zero temperature in Celsius
    var output1 = converterCtoF.querySelector('#converterCtoF-output');
    var tidbit1 = converterCtoF.querySelector('#converterCtoF-tidbit');
    temperatureC = window.prompt('What is the temperature in Celsius?');

    if (!temperatureC || isNaN(temperatureC) || temperatureC <= minC) {
        return alert('Please enter a valid temperature in Celsius');;
    }

    temperatureF = 1.8 * temperatureC + 32; // formula to convert temperature in Celsius to Fahrenheit
    output1.innerHTML = (temperatureC + ' degrees Celsius is ' + temperatureF + ' degrees Fahrenheit.<br><br');

    if (temperatureC < 0) {
        return tidbit1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a solid state.<br><br>');
    }

    if (temperatureC >= 0 && temperatureC < 100) {
        return tidbit1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a liquid state.<br><br>');
    }

    return tidbit1.innerHTML = ('At ' + temperatureC + ' degrees Celcius water is in a vapor state.<br><br>');
});


button2.addEventListener('click', function(){
    var minF = -459.67; // absolute zero temperature in Fahrenheit
    var tempF1 = 32; // temperature of 0 degrees Celsius in Fahrenheit
    var tempF2 = 212 // temperature of 100 degrees Celsius in Fahrenheit
    var output2 = converterFtoC.querySelector('#converterFtoC-output');
    var tidbit2 = converterFtoC.querySelector('#converterFtoC-tidbit');
    temperatureF = window.prompt('What is the temperature in Fahrenheit');

    if (!temperatureF || isNaN(temperatureF) || temperatureF <= minF) {
        return alert('Please enter a valid temperature in Fahrenheit');;
    }

    temperatureC = (temperatureF - 32) * (5/9); // formula to convert temperature in Fahrenheit to Celsius
    output2.innerHTML =(temperatureF + ' degrees Fahrenheit is ' + temperatureC + ' degrees Celsius.<br><br');

    if (temperatureC < tempF1) {
        return tidbit2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a solid state.<br><br>');
    }

    if (temperatureC >= tempF1 && temperatureC < tempF2) {
        return tidbit2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a liquid state.<br><br>');
    }

    return tidbit2.innerHTML = ('At ' + temperatureF + ' degrees Fahrenheit water is in a vapor state.<br><br>');
});
