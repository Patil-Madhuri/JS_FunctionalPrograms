/**
 * Purpose: Sum of three Integer adds to ZERO.
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

function sumOfThreeIntegers() {
    read.question("enter the no. of interger u want to put->\n\n", function (val) {
        common.sumofThreeNumbers(read, val);
    });

}
sumOfThreeIntegers();