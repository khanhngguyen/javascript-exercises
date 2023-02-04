const fibonacci = function(n) {
    //error if user puts negative number
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    //first number in the Fibonacci series is 1
    if (n === 1) return 1;
    //declare a & b, first 2 numbers in the Fibonacci
    let a = 0;
    let b = 1;
    //loop (n - 2) because we already have a & b
    for (let i = 0; i < n - 2; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    //end of loop, a & b now are the 2 numbers preceding n
    return a + b;
};

// Do not edit below this line
module.exports = fibonacci;
