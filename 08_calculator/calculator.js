const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum,num) => sum+=num,0);	
};

const multiply = function(...args) {
  return args.reduce((product,num) => product*=num,1);	
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
  let res = 1;
	for (let i = num; i >= 1; i--) {
    res *= i;
  }

  return res;
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
