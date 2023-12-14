const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    if (!(arr instanceof Array)) return 0;
    else if (arr.length > 1){
      return 1 + arr.reduce((a, b) => Math.max(a, this.calculateDepth(b)), this.calculateDepth(arr[0]));
    }
    else if (arr.length === 1){
      return 1 + this.calculateDepth(arr[0]);
    }
    else {
      return 1;
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
