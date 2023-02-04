const add = function(a, b) {
  return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(arr) {
  const result = arr.reduce((sumAll, item) => {
    return item + sumAll;
  }, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((multiplyAll, item) => {
    return item * multiplyAll;
  }, 1);
  return result;
};

const power = function(a ,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	//factorials are for positive numbers only
  if (a < 0) {
    return 'ERROR';
  } else if (a === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = a; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
