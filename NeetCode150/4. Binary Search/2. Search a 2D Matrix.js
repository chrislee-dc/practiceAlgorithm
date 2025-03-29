// Search a 2D Matrix
// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let l = 0;
    let r = ROWS * COLS - 1;

    while (l <= r) {
      let m = l + Math.floor((r - l) / 2); // 6
      let rows = Math.floor(m / COLS);
      let cols = Math.floor(m % COLS); // 2
      if (matrix[rows][cols] > target) {
        r = m - 1;
      } else if (matrix[rows][cols] < target) {
        l = m + 1;
      } else {
        return true;
      }
    }
    return false;
  }
}

const a = new Solution().searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
);
console.log("🚀 ~ a: 2", a);

// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

// Output: true

// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

// Output: false
