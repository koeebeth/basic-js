const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let strToRepeat = String(str);
  addition = String(addition);
  if(addition) {
    strToRepeat += repeater(addition, {repeatTimes: additionRepeatTimes,  separator: additionSeparator});
  }

  let repeatedString = new Array(repeatTimes);
  repeatedString.fill(strToRepeat);
  return repeatedString.join(separator);
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
