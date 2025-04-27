class Solution {
  /**
   * @param {number[][]} matrix
   * @return {void}
   */
  rotate(matrix) {
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
  }
}

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

new Solution().rotate(matrix);
