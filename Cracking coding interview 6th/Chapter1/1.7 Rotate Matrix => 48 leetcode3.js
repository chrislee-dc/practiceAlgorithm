// You are given an n x n 2D matrix representing an image,
// rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place,
// which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      const top = left;
      const bottom = right;

      const topLeft = matrix[top][left + i];

      // bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left];

      // bottom right to bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // top right to bottom right
      matrix[bottom][right - i] = matrix[top + i][right];

      // top left to top right
      matrix[top + i][right] = topLeft;
    }
    left++;
    right--;
  }

  return matrix;
};

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const b = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(rotate(a));
console.log(rotate(b));

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

/**
 * 123
 * 456
 * 789
 *
 * 721
 * 456
 * 983
 */

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

/**
 * [0][0] => [0][3]
 * [0][3] => [3][3]
 * [3][3] => [3][0]
 * [3][0] => [0][0]
 *
 * [1][0] => [1][3]
 * [3][2] => [2][0]
 */
