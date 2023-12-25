const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = " bcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s2Length = s2.length;
  for (let ind = 0; ind < s2Length; ind += 1) {
    let currS2 = s2[ind];
    let commonChar = s1.indexOf(currS2);
    if (commonChar >= 0) {
      result += 1;
      s1 = s1.replace(currS2, '');
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
