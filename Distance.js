/**
 * Purpose:  Program to calculate  Euclidean distance.
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
 * Function to calculate  Euclidean distance.
 * 
 * @param x contains value of X.
 * @param y contains value of Y.
 */
read.question("Enter value of X : ",(x) => {
  if(x) {
    read.question("Enter value of Y : ",(y) => {
      common.euclideanDistance(x,y);
    });
  }
});
