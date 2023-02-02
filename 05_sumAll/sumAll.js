/* 
no negative num
no non-number: no string, no array
 */

const sumAll = function(a, b) {
    //no negative number
    if (a < 0 || b < 0) return 'ERROR';
    //no non-number: no string, no array
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return 'ERROR';
    let min;
    let max;
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    };
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
