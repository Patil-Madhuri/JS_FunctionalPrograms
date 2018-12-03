/**
 * Purpose: Check Leap Year or not 
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
* @param year contains year to check leap or not.
*/
read.question("Enter Year to check leap year or not ", function(year) {
    common.isLeapYear(year);
    read.close();
});