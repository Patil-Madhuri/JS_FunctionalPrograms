/**
 * Purpose: Generate random number and to process distinct coupons..
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
 * @param noOfCoupons contains the total number of coupons to generate.
 */
function couponNumbers() {
	read.question('enter the minimum value-> ',function(min){

        read.question('enter the max value->',function(max){
		common.findCouponNumbers(min,max);
    	read.close();
	});
});
}

couponNumbers();