const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  let count = 0;
  if (s1.length > s2.length) {
    for (char of s2) {
      if (s1.includes(char)) {
        s1.splice(s1.indexOf(char), 1);
        count++;
      }
    }
  }
  else {
    for (char of s1) {
      if (s2.includes(char)) {
        s2.splice(s2.indexOf(char), 1);
        count++;
      }
    }
  }
  return count;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
