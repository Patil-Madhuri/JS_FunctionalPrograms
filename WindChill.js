/**
 * Purpose: Program that takes two arguments t and v and prints the wind chill..
 * 
 * @author Madhuri Patil
 *
 */
var readline = require('readline');
var common = require('./utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to prints the wind chill..
 * 
 * @param temp contains value of temperature.
 * @param speed contains value of wind spped.
 */
function windChill() {
    read.question("Enter temperature value : ",(temp) => {
        if(temp) {
            read.question("Enter wind speed value : ",(speed) => {
                result = common.effectiveTemperature(temp,speed);
                console.log("Effective Temperature : "+result);
            });
        }
    });
}

windChill();
