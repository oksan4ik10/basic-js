const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains = domains.map((i) => {
    return "." + i.split(".").reverse().join(".")
  })
  domains.forEach(element => {
    let n = element;

    while (n.indexOf(".") !== -1) {

      if (!(n in res)) {
        res[n] = 1;
      } else {
        res[n] += 1
      }
      n = n.slice(0, n.lastIndexOf("."))

    }


  });
  return res
}

module.exports = {
  getDNSStats
};
