const sumAll = function(first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR';

  const firstNumber = Number(first);
  const secondNumber = Number(second);

  if (firstNumber < 0 || secondNumber < 0) return 'ERROR';


  const bigger = firstNumber > secondNumber ? firstNumber : secondNumber;

  const sum = bigger * ((firstNumber + secondNumber) / 2);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
