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

  let res = String(n).split("").reduce((acc, prev, index, arr) => {
    let ar = arr.slice(0, index) + arr.slice(index + 1).join("");
    ar = Number(ar.replace(/,/gi, ""))
    if (ar > acc) return ar;
    return acc;


  }, 0);
  return res;

}

module.exports = {
  deleteDigit
};
