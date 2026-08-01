const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator *= currentValue);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (num) {
  let x = 1;

  for (let i = 1; i <= num; i++) {
    x = x * i;
  }
  return x;
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
