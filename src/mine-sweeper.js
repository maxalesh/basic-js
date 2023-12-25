const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  let result = [];

  const neighbours = {
    topLeft(x, y) {
      if (x - 1 >= 0 && x - 1 < M && y - 1 >= 0 && y - 1 < N) {
        if (matrix[x - 1][y - 1] === true) return 1;
      }
      return 0;
    },
    top(x, y) {
      if (x >= 0 && x < N && y - 1 >= 0 && y - 1 < N) {
        if (matrix[x][y - 1] === true) return 1;
      }
      return 0;
    },
    topRight(x, y) {
      if (x + 1 >= 0 && x + 1 < N && y - 1 >= 0 && y - 1 < N) {
        if (matrix[x + 1][y - 1] === true) return 1;
      }
      return 0;
    },
    left(x, y) {
      if (x - 1 >= 0 && x - 1 < M && y >= 0 && y < N) {
        if (matrix[x - 1][y] === true) return 1;
      }
      return 0;
    },
    right(x, y) {
      if (x + 1 < N && y >= 0 && y < N) {
        if (matrix[x + 1][y] === true) return 1;
      }
      return 0;
    },
    bottomLeft(x, y) {
      if (x - 1 >= 0 && x - 1 < M && y + 1 >= 0 && y + 1 < N) {
        if (matrix[x - 1][y + 1] === true) return 1;
      }
      return 0;
    },
    bottom(x, y) {
      if (x >= 0 && x < N && y + 1 >= 0 && y + 1 < N) {
        if (matrix[x][y + 1] === true) return 1;
      }
      return 0;
    },
    bottomRight(x, y) {
      if (x + 1 >= 0 && x + 1 < N && y + 1 >= 0 && y + 1 < N) {
        if (matrix[x + 1][y + 1] === true) return 1;
      }
      return 0;
    },
  };

  for (let i = 0; i < N; i += 1) {
    let countNeighTrue = 0;
    let row = [];
    for (let j = 0; j < M; j += 1) {
      countNeighTrue = 0;
      countNeighTrue += neighbours.topLeft(j, i) +
        neighbours.top(j, i) +
        neighbours.topRight(j, i) +
        neighbours.left(j, i) +
        neighbours.right(j, i) +
        neighbours.bottomLeft(j, i) +
        neighbours.bottom(j, i) +
        neighbours.bottomRight(j, i);
      row.push(countNeighTrue);
      console.log(result, 'result', countNeighTrue, 'countNeighTrue', row, 'row')
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper,
};
