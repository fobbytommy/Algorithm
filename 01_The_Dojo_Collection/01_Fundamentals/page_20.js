// Countdown
countDown = num => {
    if (typeof(num) !== 'number') {
        return null;
    }
    var intNum = parseInt(num);
    var countArr = [];
    for (let i = num; i >= 0; i--) {
        countArr.push(i);
    }
    return countArr;
};
var numArr = countDown(10);
console.log(numArr);
console.log(numArr.length);

// Print and Return
console.log('----------------------------------------------------------------');
printReturn = arr => {
    if (arr.length < 2) {
        return null;
    }
    console.log(`printing ${arr[0]}`);
    return arr[1];
};
console.log(`returning ${printReturn([5, 3])}`);

// First Plus Length
console.log('----------------------------------------------------------------');
firstPlusLength = arr => {
    return arr[0] + arr.length;
};
console.log(firstPlusLength([3, 1]));

// Values Greater than Second
console.log('----------------------------------------------------------------');
valuesGreaterThanSecond = arr => {
    var count = 0;
    arr.forEach(num => {
        if (num > arr[1]) {
            console.log(num);
            count++;
        }
    });
    return count;
};
console.log(`there are total of ${valuesGreaterThanSecond([1,3,5,7,9,13])}`);

// Values Great than Second, Generalized
console.log('----------------------------------------------------------------');
valuesSecondGeneralized = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (arr.length < 2) {
        return null;
    }
    var count = 0;
    arr.forEach(num => {
        if (num > arr[1]) {
            console.log(num);
            count++;
        }
    });
    return count;
};
console.log(`there are total of ${valuesSecondGeneralized([1,12,5,7,9,13])}`);

// This Length, That Value
console.log('----------------------------------------------------------------');
lengthValue = (n1, n2) => {
    if (n1 === n2) {
        return console.log('Jinx!');
    }
    var arr = [];
    for (let i = 0; i < n1; i++) {
        arr.push(n2);
    }
    return arr;
};
lengthValue(1,1);
console.log(lengthValue(4, 6));

// Fit the First Value
console.log('----------------------------------------------------------------');
firstValue = arr => {
    if (typeof(arr[0]) !== 'number') {
        return null;
    }
    if (arr[0] > arr.length) {
        console.log('Too big!');
    } else if (arr[0] < arr.length) {
        console.log('Too small!');
    } else {
        console.log('Just right!');
    }
};
firstValue([2,3,4]);
firstValue([4,3,4]);
firstValue([3,3,4]);

// Fahrenheit to Celsius
console.log('----------------------------------------------------------------');
fahrenheitToCelsius = fdegrees => {
    if (typeof(fdegrees) !== 'number') {
        return null;
    }
    return parseInt((fdegrees - 32) * (5/9));
}
console.log(fahrenheitToCelsius(80));

// Celsius to Fahrenheit
console.log('----------------------------------------------------------------');
celsiusToFahrenheit = cdegrees => {
    if (typeof(cdegrees) !== 'number') {
        return null;
    }
    return parseInt(((9/5) * cdegrees) + 32);
};
console.log(celsiusToFahrenheit(27));

// Where do C and F meet starting from Celsius 200
console.log('----------------------------------------------------------------');
var cDeg = 200;
while (true) {
    if (cDeg == celsiusToFahrenheit(cDeg)) {
        console.log(`They meet at ${cDeg}`);
        break;
    }
    cDeg--;
}