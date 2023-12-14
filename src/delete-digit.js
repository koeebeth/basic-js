const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = `${n}`.split('');
  let max = +arr.slice(1).join('');
  for (let i = 1; i < arr.length; i++) {
    let num = +[...arr.slice(0, i), ...arr.slice(i + 1)].join('');
    if(num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
