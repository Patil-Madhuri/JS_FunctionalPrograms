
/**
 * Purpose: To replace a string.
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
 * Function to replace string by given name.
 * 
 * @param username contains name to replace.
 */
read.question("Enter username to replace : ",function(username) { 
    common.replaceString(username);         
    read.close();
});
