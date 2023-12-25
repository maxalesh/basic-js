const {NotImplementedError} = require('../extensions/index.js');

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
  if (domains.length === 0) return {};
  let result = {};
  domains.forEach((domain) => {
    let domRev = domain.split('.').reverse().map((el) => '.'.concat(el));
    for (let i = 1; i < domRev.length; i += 1) {
      domRev[i] = domRev[i - 1] + domRev[i];
    }
    domRev.forEach((domLevel) => {
      if (result[domLevel] === undefined) {
        result[domLevel] = 1;
      } else {
        result[domLevel] += 1;
      }
    })
  })

  return result;
}

module.exports = {
  getDNSStats,
};
