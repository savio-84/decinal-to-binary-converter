const { Stack } = require('data-structures-savio-araujo');

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop();
    binaryString.toString();
  }

  return binaryString;
}

module.exports = { decimalToBinary }