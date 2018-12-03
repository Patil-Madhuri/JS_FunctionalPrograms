/**
 * Purpose:  Program to find the roots of Quadratic Equation.
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
 * Functionto find the roots of Quadratic Equation.
 * 
 * @param a contains value of first number.
 * @param b contains value of second number
 * @param c contains value of third number
 */
read.question("Enter value of a : ",(a) => {
    if(a) {
        read.question("Enter value of b : ",(b) => {
            if(b) {
                read.question("Enter value of c : ",(c) => {
                    common.quadraticEquation(a,b,c)        
                })
            }
        })
    }
})