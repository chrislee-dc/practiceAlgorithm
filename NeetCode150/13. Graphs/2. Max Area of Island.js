class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    const findMaxArea = (i, j, count) => {
      if (i < 0 || j < 0 || i >= ROWS || j >= COLS || grid[i][j] === 0) {
        return;
      }

      grid[i][j] = 0;
      count[0]++;

      findMaxArea(i - 1, j, count);
      findMaxArea(i + 1, j, count);
      findMaxArea(i, j + 1, count);
      findMaxArea(i, j - 1, count);

      return count[0];
    };

    let res = 0;
    let count = [0];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          count = [0];
          res = Math.max(findMaxArea(i, j, count), res);
        }
      }
    }
    return res;
  }
}

grid = [
  [0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
];

// grid = [[0, 0, 0, 0, 0, 0, 0, 0]];

// grid = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ];

new Solution().maxAreaOfIsland(grid);
