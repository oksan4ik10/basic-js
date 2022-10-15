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
function encodeLine(s) {
  let res = "", count = 0;
  if (!s) return "";
  let t = s.split("");

  t.reduce((prev, next) => {
    if (prev === next) count++;
    else {
      if (count === 1) res += prev;
      else res += count + prev;
      count = 1;
    }
    return next
  }, t[0])
  if (count === 1) res += t[t.length - 1]
  else res += count + t[t.length - 1]
  return res
}

module.exports = {
  encodeLine
};
