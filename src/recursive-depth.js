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
  calculateDepth(arr) {
    if (arr.length === 0) return 1;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) return 1 + this.calculateDepth(arr.flat())
      if ((!Array.isArray(element)) && (arr.length - 1 === index)) return 1;

    }

  }
}


module.exports = {
  DepthCalculator
};
