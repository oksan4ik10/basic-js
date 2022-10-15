const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function compareNumeric(a, b) {
    if (a > b) return 1;

    if (a == b) return 0;
    if (a < b) return -1;
  }
  let i = 0;

  let newArr = arr.filter((item) => item !== -1).sort(compareNumeric);
  arr.forEach((element, index) => {
    if (element !== -1) {
      arr[index] = newArr[i];
      i++;
    }

  });


  return arr;
}

module.exports = {
  sortByHeight
};
