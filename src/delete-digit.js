const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = String(n).split('').reverse();
  let max = -1;
  for (let i = 0; i < numbers.length; i += 1) {
    let current = [];
    for (let j = numbers.length - 1; j >= 0; j -= 1) {
      if (j === i) continue;
      current.push(numbers[j]);
    }
    let currNumb = +current.join('')
    max = currNumb > max ? currNumb : max;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
