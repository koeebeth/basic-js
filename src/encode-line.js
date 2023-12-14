const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encrypted = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while(i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      encrypted += count + str[i];
    }
    else {
      encrypted += str[i];
    }
  }
  return encrypted;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
