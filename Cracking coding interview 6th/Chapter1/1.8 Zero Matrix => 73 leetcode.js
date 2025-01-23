// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroIndexes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIndexes.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeroIndexes.length; i++) {
    const [row, column] = zeroIndexes[i];

    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0;
    }
  }
};

const a = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const b = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
const c = [[0, 1]];

setZeroes(c);
