const {NotImplementedError} = require('../extensions/index.js');

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
  let exceptInd = [];
  // let arrSort = structuredClone(arr).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      exceptInd.push(i);
    }
  }

  if (exceptInd.length > 0) {
    for (let i = 0; i < exceptInd.length; i += 1) {
      arr.splice(exceptInd[i] - i, 1);
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < exceptInd.length; i += 1) {
      arr.splice(exceptInd[i], 0, -1);
    }
  } else {
    arr.sort((a, b) => a - b);
  }
  return arr;
}


module.exports = {
  sortByHeight,
};
