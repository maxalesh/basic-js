const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const obj = new Error('Invalid date!');
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date.getMonth === undefined || !date instanceof Date || Object.prototype.toString.call(date) !== '[object Date]' ||
    Object.getOwnPropertyNames(date)[0] === 'toString'
  ) {
    throw obj;
  }
  const month = date.getMonth();
  if (month >= 11 || month <= 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason,
};
