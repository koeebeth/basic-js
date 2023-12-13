const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  const transformedArray = [...arr];

  const isNotAction = (el) => {
    return (
      el !== '--discard-next'
    && el !== '--discard-prev'
    && el !== '--double-next' 
    && el !== '--double-prev');
  }

  let i = 0;
  while (transformedArray[i]) {
    switch (transformedArray[i]) {
      case '--discard-next':
        if (transformedArray[i + 1] && isNotAction(transformedArray[i + 1])){
          transformedArray.splice(i + 1, 1);
        }
        i++;
        break;
      case '--discard-prev':
        if (transformedArray[i - 1] && isNotAction(transformedArray[i - 1])) {
          transformedArray.splice(i - 1, 1);
        }
        i++;
        break;
      case '--double-next':
        if (transformedArray[i + 1] && isNotAction(transformedArray[i + 1])){
          transformedArray.splice(i + 1, 0, transformedArray[i + 1]);
        }
        i++;
        break;
      case '--double-prev':
        if (transformedArray[i - 1] && isNotAction(transformedArray[i - 1])) {
          transformedArray.splice(i - 1, 0, transformedArray[i - 1]);
        }
        i+=2;
        break;
      default:
        i++;
        break;
    }
  }

  return transformedArray.filter(el => isNotAction(el));
  // remove line with error and write your code here
}

module.exports = {
  transform
};
