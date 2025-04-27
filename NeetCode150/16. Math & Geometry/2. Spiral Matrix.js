class Solution {
  /**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  spiralOrder(matrix) {
    let l = 0;
    let r = matrix[0].length - 1;
    let result = [];

    let recursion = (l, r, t, b, ROWS, COLUMNS) => {
      if (l < ROWS) {
        result.push(matrix[t][l]);
        return recursion(l + 1, r, t, b, ROWS, COLUMNS);
      }

      if (t + 1 < COLUMNS) {
        result.push(matrix[t + 1][r]);
        return recursion(l, r, t + 1, b, ROWS, COLUMNS);
      }

      if (r - 1 >= R) {
        result.push(matrix[b][r - 1]);
        return recursion(l, r - 1, t, b, ROWS, COLUMNS);
      }

      if (b - 1 > 0) {
        result.push(matrix[b - 1][r]);
        return recursion(l, r, t, b - 1, ROWS, COLUMNS);
      }
    };

    while (l < r) {
      let ROWS = matrix[0].length - l;
      let COLUMNS = matrix.length - l;

      recursion(l, r, l, r, ROWS, COLUMNS);
      l++;
      r--;
    }

    if (ROWS >= 3 && ROWS % 2 !== 0) {
      result.push(matrix[Math.floor(ROWS / 2)][Math.floor(ROWS / 2)]);
    }

    return result;
  }
}

// expected:
// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

new Solution().spiralOrder(matrix);
