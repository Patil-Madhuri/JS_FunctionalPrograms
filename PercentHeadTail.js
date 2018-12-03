/**
 * Purpose: Flip Coin and print percentage of Heads and Tails
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
* @param noOfFlips contains the number the coin to be flipped.
*/
read.question("Enter how many times to flip coin : ",function(noOfFlips) { 
    common.countHeadTail(noOfFlips);
    read.close();
});