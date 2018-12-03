/**
 * Purpose: To find Harmonic Number. 
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
 * Function to find Harmonic Number.
 * 
 * @param input contains value to print harmonic series.
 */
read.question("Enter input : ", function(input) {
  common.harmonicNumber(input);
  read.close();
});