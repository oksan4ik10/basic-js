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
    this.count = 1;
    this.res = 0;
  }
calculateDepth(arr) {

    if (arr.length === 0) {
        if(this.count>this.res){
            this.res = this.count;
        }
        this.count = 1;
        return
    };
    if (Array.isArray(arr[0])) {
        this.count++;
        this.calculateDepth(arr[0])
    }
    this.calculateDepth(arr.slice(1));

    return this.res;

    
}
}

module.exports = {
  DepthCalculator
};
