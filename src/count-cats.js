const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  res = 0;
  arr.forEach(element => {
      element.forEach((item)=>{
          if (item == '^^') res++;
      })
  });
  return res;
}

module.exports = {
  countCats
};
