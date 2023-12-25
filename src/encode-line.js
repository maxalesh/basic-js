const {NotImplementedError} = require('../extensions/index.js');

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
function encodeLine(str) {
  const regExp = /([A-Za-z])\1*/g;
  const isMoreOne = (str) => str.length > 1;
  return str.replace(regExp, (s) => {
    if (isMoreOne(s)) return `${s.length}${s[0]}`;
    return s[0];
  })
}

module.exports = {
  encodeLine,
};
