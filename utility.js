module.exports = {

    //-----------------------Functional Programs-------------------------//
	/**
	 * 1. Function to take user input and replace string with username
	 * @param username
	 */
    replaceString: function (username) {
        var template = "Hello <<UserName>>, How are you?";
        if (username.length > 3) {
            console.log('Replaced String is : ');
            var string = template.replace("<<UserName>>", username);
            console.log(string);
        }
        else {
            console.log("Invalid input");
        }
    },


    /**
	 * 2.  Flip Coin and print percentage of Heads and Tails
	 * @param noOfFlip
	 */
    countHeadTail: function (noOfFlips) {
        if (noOfFlips > 0) {

            var headCount = 0;
            var tailCount = 0;

            for (index = 0; index < noOfFlips; index++) {
                var random = Math.random();
                if (random < 0.5) {
                    tailCount++;
                    console.log("Tail : " + tailCount);
                }
                else {
                    headCount++;
                    console.log("Head : " + headCount);
                }
            }
            percentHead = (headCount * 100) / noOfFlips;
            percentTail = (100 - percentHead);

            console.log("Percentage of Head : " + percentHead);
            console.log("Percentage of Tail :" + percentTail);
        }
        else {
            console.log("Invalid input");
        }
    },


    /**
	 * 3. Check Leap Year or not 
	 * @param year
	 */
    isLeapYear: function (year) {
        if (year > 1000) {
            if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
                console.log(year + " is leap year");
            else
                console.log(year + " is not leap year");
        } else {
            console.log("Enter valid year");
        }
    },


    /**
	 * 4. Function to print power of two
	 * @param range
	 */
    powerofTwo: function (range) {
        if (range >= 0 && range < 31) {
            var power = 1;
            for (var index = 1; index <= range; index++) {
                power = power * 2;
                console.log("Power of 2^" + index + " is " + power);
            }
        } else {
            console.log("Enter valid input");
        }
    },


    /**
	 * 5. Function to print Harmonic Value
	 * @param input
	 */
    harmonicNumber: function (input) {
        if (input > 0) {
            var result = 0;
            for (var index = 1; index < input; index++) {
                result = (result + 1.0 / index);
            }
            console.log(result);
        } else {
            console.log("Enter valid input");
        }
    },


    /**
	 * 6. Prime factors of a number
     * @param input
     */
    primeFactors: function (input) {
        console.log("Prime Factors");
        var prime = [];
        var i = 0;
        for (var index = 2; index * index <= input; index++) {
            while (input % index == 0) {
                if (prime[i] == index) {
                    i++;
                }
                else {
                    prime[i] = index;
                    console.log(index);
                }
                input = input / index;
            }
        }
        if (input > 1)
            console.log(input);
    },


    /**
	 * 7. Gambler code
	 * @param noOfTimes
	 * @param stake
	 * @param goals
	 */
    gambler: function (stake, goals, noOfTimes) {

        var wins = 0;
        for (var index = 0; index < noOfTimes; index++) {
            var random = Math.random();
            while (stake > 0 && stake < goals) {
                if (random < 0.5)
                    stake++;
                else
                    stake--;

                if (stake == goals)
                    wins++;
            }

        }
        console.log("Number of wins : " + wins);
        console.log("Percentage of wins : " + (wins * 100) / noOfTimes);
        console.log("Percentage of loss : " + (100 - ((wins * 100) / noOfTimes)));
    },


    /**
	 * 8. Generate N distinct coupons
	 * @param min, max
	 */
    findCouponNumbers: function (min, max) {
        var random = [], i, n;
        for (i = min; i < max; i++) {
            n = r2.random(min, max)
            random.push(n);

        }
        console.log(random);
        console.log('the length' + random.length);
        var distinct = new Set(random);
        console.log(distinct);
        console.log("number of distinct coupon " + [...distinct].length);

    },
    /*  findCouponNumbers: function(noOfCoupons) {
         var distinct=0,randomNo;
         var flag=0,index=0;
         var arr = new Array();
         
         while(index<noOfCoupons){
             randomNo = parseInt(Math.random()*noOfCoupons) ;
             console.log("Random Number : "+randomNo);
             distinct++;
         
             for(var i = 0; i<index;i++){
                 //console.log("arr["+i+"] is "+arr[i]);
                 if(arr[i] == randomNo)
                     flag = 1;
             }
             if(flag == 0){
                 arr[index] = randomNo;
                 index++;
             }
             flag = 0;	
         }
         
         console.log("Number of coupons : "+distinct);
         for(var i in arr)
             console.log(i);
     }, */



    /**
	 * 10. Sum of three Integer adds to ZERO
	 */

    sumofThreeNumbers: function (prompts, value) {
        this.value = value;
        var arr2 = [];
        var count = 0;
        function findTriplets(value) {
            if (arr2.length >= value) {
                for (var i = 0; i < value; i++) {
                    for (var j = i + 1; j < value; j++) {
                        for (var k = j + 1; k < value; k++) {
                            {
                                if (Number(arr2[i]) + Number(arr2[j]) + Number(arr2[k]) === 0) {
                                    if ((Number(arr2[i]) != Number(arr2[j])) != Number(arr2[j])) {
                                        count++;
                                        console.log('triplets found [' + arr2[i] + ', ' + arr2[j] + ', ' + arr2[k] + ']');
                                    }
                                }
                            }
                        }
                    }
                }
                console.log('total no of triplets->' + count);
                prompts.close();
            }
            else
                prompts.question('enter the value->', function (a) {

                    arr2.push(a);
                    //prompts.close();

                    findTriplets(value);

                });

        }
        findTriplets(value);
    },


    arr2d: function (prompts, row, cols) {
        this.row = row;
        this.cols = cols;
        var limit = row * cols;
        var arr1 = [];
        function input(limit) {
            if (arr1.length >= limit) {
                var k = 0;
                array2d = [];
                var string = '';
                for (var i = 0; i < row; i++) {
                    for (var j = 0; j < cols; j++) {
                        string = string + arr1[k] + ' ';
                        k++;
                    }
                    array2d.push(string);
                    string = '';
                }
                for (let index = 0; index < array2d.length; index++) {
                    console.log(array2d[index]);
                }
            }
            else {
                prompts.question(`Please enter the ${(arr1.length + 1)} th value: `, function (ans) {
                    arr1.push(ans);
                    input(limit);
                });
            }
        }
        input(limit);

    },

    /**
	 * 11. Euclidean Distance 
	 * @param x
	 * @param y
	 */
    euclideanDistance: function (x, y) {
        var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        console.log("Euclidean Distance : " + distance);
    },


    /**
	 * 13. StopWatch program
	 * @return
	 */
    getCurrentTime: function () {
        var d = new Date();
        var n = d.getTime();
        return n;
    },

    elapsedTime: function (start, stop) {
        elapsesTime = stop - start;
        return elapsesTime;
    },


    /**
	 * 15. Quadratic equation 
	 * @param a
	 * @param b
	 * @param c
	 */
    quadraticEquation: function (a, b, c) {
        delta = b * b - 4 * a * c;
        root1 = (-b + Math.sqrt(delta)) / (2 * a);
        root2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log("Root 1 of X : " + root1);
        console.log("Root 2 of X : " + root2);
    },


    /**
	 * 16. WindChill 
	 * @param t
	 * @param v
	 * @return
	 */
    effectiveTemperature: function (t, v) {
        if (t > 50 && (v > 120 || v < 3)) {
            w = 35.75 + (0.6215 * t) + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            return w;
        }
        else
            console.log("Invalid Input");
    },
    permute :function(alphabets, startIndex, endIndex) {
        if (startIndex === endIndex) 
        {
            //console.log(startIndex);
            //console.log(endIndex);   
            console.log(alphabets.join(''));
        }
         else
         {
          var i;
          for (i = startIndex; i <= endIndex; i++)
           {
            swap(alphabets, startIndex, i);
            this.permute(alphabets, startIndex + 1, endIndex);
            swap(alphabets, i, startIndex); // backtrack
          }
        }
    
        function swap (alphabets, index1, index2) {
            var temp = alphabets[index1];
            alphabets[index1] = alphabets[index2];
            alphabets[index2] = temp;
            return alphabets;
          }
        
          
      },
};
