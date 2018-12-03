/**
 * Purpose: Gambler.
 * 
 * @author Madhuri Patil
 *
 */
var readline = require('readline');
var common = require('./utility.js');

var read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to replace string by given name.
 * 
 * @param stack contains the value the gambler will be using for gambling.
 * @param goal states the goal which will be considered for win condition.
 * @param noOfTimes contains the number of times the gambler will play.
 * 
 */
read1.question("Enter Stake value : ",(stake) => {
    if(stake) {
        read1.question("Enter Goal value : ",(goals) => {
        if(goals) {
            read1.question("Enter number of times to play : ",(noOfTimes) => {
                common.gambler(stake,goals,noOfTimes);
            });
        }
        });
    }
//read1.close();
});

