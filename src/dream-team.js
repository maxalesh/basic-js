const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !isNaN(members) || members.length === 0 || Object.prototype.toString.call(members) === '[object Object]') {
    return false;
  }
  let result = [];
  members = members.filter((m) => {
    if (isNaN(m) && Boolean(m) && Object.prototype.toString.call(m) !== '[object Set]' && Object.prototype.toString.call(m) !== '[object Array]') {
      if (Object.prototype.toString.call(m) === '[object Object]') {
        for (let key in m) {
          if (!isNaN(key)) {
            return false;
          }
        }
      }
      return m;
    }
  });

  members = members.map((m) => {
    if (Object.prototype.toString.call(m) === '[object Object]') {
      for (let key in m) {
        if (isNaN(key)) {
          return key;
        }
      }
    }
    return m;
  });

  members.forEach((member) => {
    const letFirst = member.trim()[0].toUpperCase();
    result.push(letFirst);
  })
  return result.sort((a, b) => a.localeCompare(b)).join('');
}

module.exports = {
  createDreamTeam,
};
