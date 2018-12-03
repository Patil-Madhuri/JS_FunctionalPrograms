/**
 * Purpose: Simulate Stopwatch Program.
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

var startTime;
var stopTime;
var elapsedTime;

/*
 * Function to calculate elapsed time for stop watch.
 * 
 * @param start to start watch.
 * @param stop to stop watch.
 */
function stopWatch() {
    read.question("Enter 1 to start watch : ",(start) => {
        startTime = common.getCurrentTime();
        if(start) {
            read.question("Enter 0 to stop watch : ",(stop) => {
                stopTime = common.getCurrentTime();
                elapsedTime = common.elapsedTime(startTime,stopTime);
                /* 
                 * Prints the calculated elapsed time between start and stop.
		         */
                console.log("Total elapsed time in miliseconds: "+elapsedTime+"ms");
                console.log("Total elapsed time in seconds: "+(elapsedTime/1000)+"sec.");
            });
        }
    });
}

stopWatch();