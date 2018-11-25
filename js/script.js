'use strict';
(function() {
    var button1 = document.getElementById('converterCtoF-btn');
    var converterCtoF = document.getElementById('converterCtoF');
    var button2 = document.getElementById('converterFtoC-btn');
    var converterFtoC = document.getElementById('converterFtoC');
    var temperatureC;
    var temperatureF;

    // This function determines if the entered input is valid
    var isInputValid = function(temperature, min) {
        if (!temperature || isNaN(temperature) || temperature <= min) {
            return alert('Please enter a valid temperature');;
        }

        return true;
    }

    // This function converts from Celsius to Fahrenheit
    var convertCtoF = function (temperatureC) {
        temperatureF = 1.8 * temperatureC + 32; // formula to convert temperature in Celsius to Fahrenheit
        temperatureF = +temperatureF.toFixed (2); // limiting the output temperature to at most 2 decimal points
        var output1 = converterCtoF.querySelector('#converterCtoF-output');
        output1.innerHTML = (temperatureC + ' degrees Celsius is ' + temperatureF + ' degrees Fahrenheit.<br><br');
        return temperatureF;
    }

    // This function converts from Fahrenheit to Celsius
    var convertFtoC = function (temperatureF) {
        temperatureC = (temperatureF - 32) * (5/9); // formula to convert temperature in Fahrenheit to Celsius
        temperatureC = +temperatureC.toFixed(2); // limiting the output temperature to at most 2 decimal points
        var output2 = converterFtoC.querySelector('#converterFtoC-output');
        output2.innerHTML =(temperatureF + ' degrees Fahrenheit is ' + temperatureC + ' degrees Celsius.<br><br');
        return temperatureC;
    }

    // This function will provide an information on the state of water at input temperature
    var waterState = function (temperatureC, tidbit) {
        if (temperatureC < 0) {
            return tidbit.innerHTML = ('At this temperature water is in a solid state.<br><br>');
        }
    
        if (temperatureC >= 0 && temperatureC < 100) {
            return tidbit.innerHTML = ('At this temperature water is in a liquid state.<br><br>');
        }
    
        return tidbit.innerHTML = ('At this temperature water is in a vapor state.<br><br>');
    }


    button1.addEventListener('click', function(){
        var minC = -273.15 // absolute zero temperature in Celsius
        var tidbit1 = converterCtoF.querySelector('#converterCtoF-tidbit');
        temperatureC = window.prompt('What is the temperature in Celsius?');
        if (isInputValid(temperatureC, minC)) {
            convertCtoF(temperatureC);
            waterState(temperatureC, tidbit1);
        }
    });

    button2.addEventListener('click', function(){
        var minF = -459.67; // absolute zero temperature in Fahrenheit
        var tidbit2 = converterFtoC.querySelector('#converterFtoC-tidbit');
        temperatureF = window.prompt('What is the temperature in Fahrenheit');
        if (isInputValid(temperatureF, minF)) {
            convertFtoC(temperatureF);
            waterState(temperatureC, tidbit2);
        }
    });
})();