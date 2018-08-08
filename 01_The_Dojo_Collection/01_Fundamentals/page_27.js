// Print 1-255
for (let i = 1; i <= 255; i++) {
    console.log(i);
}

// Print Ints and Sum 0-255
console.log('----------------------------------------------------------------');
var sum = 0;
for (let i = 1; i <= 255; i++) {
    sum += i;
    console.log(i);
    console.log(`Current sum is ${sum}`);
}

// Find and Print Max
console.log('----------------------------------------------------------------');
var arr = [1, 3, 5, 7, 6, 2];
var max;
arr.forEach(n => {
    if (max == undefined) {
        max = n;
    } else if (max < n) {
        max = n;
    }
});
console.log(max);

// Array with Odds
console.log('----------------------------------------------------------------');
var arr = [];
for (let i = 1; i <= 255; i += 2) {
    arr.push(i);
}
console.log(arr);

// Greater than Y
console.log('----------------------------------------------------------------');
greaterThanY = (arr, y) => {
    let count = 0;
    arr.forEach(n => {
        if (n > y) {
            console.log(n);
            count++;
        }
    });
    return count;
}
var arr = [1, 3, 5, 7, 6, 2];
console.log(greaterThanY(arr, 2));

// Max, Min, Average
console.log('----------------------------------------------------------------');
maxMinAvg = arr => {
    let max = arr[0], min = arr[0], sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;

    return [max, min, avg];
};
var arr = [1, 3, 5, 7, 6, 2];
console.log(maxMinAvg(arr));

// Swap String For Array Negative Values
console.log('----------------------------------------------------------------');
swapNegative = arr => {
    arr.forEach((n, i) => {
        if (n < 0) {
            arr[i] = 'Dojo';
        }
    });
}
var arr = [-1, 3, -5, 7, -6, 2];
swapNegative(arr);
console.log(arr);

// Print Odds 1-255
console.log('----------------------------------------------------------------');
for (let i = 1; i <= 255; i += 2) {
    console.log(i);
}

// Iterate and Print Array
console.log('----------------------------------------------------------------');
var arr = [-1, 3, -5, 7, -6, 2];
arr.forEach(n => {
    console.log(n);
});

// Get and Print Average
console.log('----------------------------------------------------------------');
var arr = [1, 3, 5, 7, 6, 2];
var sum = 0;
arr.forEach(n => {
    sum += n;
});
console.log(`Average is ${sum / arr.length}`);

// Square the Values
console.log('----------------------------------------------------------------');
squareArr = arr => {
    arr.forEach((n, i) => {
        arr[i] = n*n;
    });
    return arr;
};
var arr = [1, 3, 5, 7, 6, 2];
squareArr(arr);
console.log(arr);

// Zero Out Negative Numbers
console.log('----------------------------------------------------------------');
var arr = [-1, 3, -5, 7, -6, 2];
zeroOutNegative = arr => {
    arr.forEach((n, i) => {
        if (n < 0) {
            arr[i] = 0;
        }
    });
    return arr;
};
console.log(zeroOutNegative(arr));

// Shift Array Values
console.log('----------------------------------------------------------------');
var arr = [-1, 3, -5, 7, -6, 2];
arr.shift();
arr.push(0);
console.log(arr);