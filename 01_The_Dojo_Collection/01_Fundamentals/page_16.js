// Setting and Swapping
var myNumber = 42;
var myName = 'Tommy';

var temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myNumber);
console.log(myName);

// Print -52 to 106 (using for loop)
var printNum = [];
for (var i = -52; i <= 106; i++) {
    printNum.push(i);
}
console.log(printNum);

// Don't Worry, Be Happy
function beCheerful() {
    for (var i = 0; i < 98; i++) {
        console.log('good morning!');
    }
}
beCheerful();

// Multiples of Three - but Not All
for (var i=-300; i <= 0; i+=3) {
    if (i == -3 || i == -6) {
        continue;
    }
    console.log(i);
}

// Printing Intergers with While
var i = 2000;
while (i <= 5280) {
    console.log(i++);
}

// Leap Year
function isLeapYear(year) {
    if (year%4 == 0) {
        if (year%100 != 0 ^ year%400 == 0) {
            console.log(year);
        }
    }
}
isLeapYear(1600);

// Print and Count 
var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i%5 == 0) {
        console.log(i);
        count++;
    }
}
console.log('There are ' + count);

// Counting, the Dojo Way
for (var i = 0; i <= 100; i++) {
    if (i%5 == 0) {
        if (i%10 == 0) {
            console.log('Coding Dojo');
        } else {
            console.log('Coding')
        }
    } else {
        console.log(i);
    }
}

// Countdown By Fours
var i = 2016;
while (i > 0) {
    console.log(i);
    i -= 4;
}

// Flexible Countdown
console.log('----------------------------');
function flexibleCount(lowNum, highNum, mult) {
    if (lowNum < highNum) {
        for (var i = highNum; i >= lowNum; i--) {
            if (i%mult == 0) {
                console.log(i);
            }
        }
    }
}
flexibleCount(2, 9, 3);

// The Final Countdown
console.log('----------------------------');
function finalCount(param1, param2, param3, param4) {
    if (param2 < param3) {
        var i = param2;
        while (i <= param3) {
            if (i%param1 == 0 && i !== param4) {
                console.log(i);
            }
            i++;
        }
    }
}
finalCount(3, 5, 17, 9);