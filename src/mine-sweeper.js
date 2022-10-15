const { NotImplementedError } = require('../extensions/index.js');

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
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        arr.push(1)
        continue

      }
      arr.push(0)
    };
    res.push(arr);

  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (i - 1 >= 0) {
          if (j - 1 >= 0) {
            if (!matrix[i - 1][j - 1]) res[i - 1][j - 1] += 1;
          }
          if (!matrix[i - 1][j]) res[i - 1][j] += 1;
          if (j + 1 <= matrix[0].length - 1) {
            if (!matrix[i - 1][j + 1]) res[i - 1][j + 1] += 1;
          }

        }
        if (j - 1 >= 0) {
          if (!matrix[i][j - 1]) res[i][j - 1] += 1;
        }
        if (j + 1 <= matrix[0].length - 1) {
          if (!matrix[i][j + 1]) res[i][j + 1] += 1;
        }
        if (i + 1 <= matrix[0].length) {
          if (j - 1 >= 0) {
            if (!matrix[i + 1][j - 1]) res[i + 1][j - 1] += 1;
          }
          if (!matrix[i + 1][j]) res[i + 1][j] += 1;
          if (j + 1 <= matrix[0].length - 1) {
            if (!matrix[i + 1][j + 1]) res[i + 1][j + 1] += 1;
          }
        }
      }

    };


  }
  return res

}

module.exports = {
  minesweeper
};
