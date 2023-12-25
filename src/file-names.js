const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  let countName = {};
  let res = [];
  names.forEach((name) => {
    if (countName[name] === undefined) {
      countName[name] = 0;
      console.log(countName, res)
      if (res.includes(name)) {
        res.push(`${name}(${countName[name] + 1})`)
      } else {
        res.push(name)
      }

    } else {
      countName[name] += 1;
      res.push(`${name}(${countName[name]})`)
    }
  })
  return res;
}

module.exports = {
  renameFiles,
};
