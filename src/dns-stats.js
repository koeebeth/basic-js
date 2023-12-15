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
  let stats = {};
  for (domain of domains) {
    let arr = domain.split('.');
    let domName = ''
    for (let i = arr.length - 1; i >= 0; i--) {
      domName += '.' + arr[i];
      if (stats[domName]) {
        stats[domName]++;
      }
      else {
        stats[domName] = 1;
      }
    }
  }
  return stats;
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
