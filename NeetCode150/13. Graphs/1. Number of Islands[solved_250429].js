class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    const findIsland = (i, j) => {
      if (i < 0 || j < 0 || i >= ROWS || j >= COLS || grid[i][j] === "0") {
        return;
      }

      grid[i][j] = "0";
      findIsland(i + 1, j);
      findIsland(i - 1, j);
      findIsland(i, j + 1);
      findIsland(i, j - 1);
    };

    let island = 0;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (grid[i][j] === "0") {
          continue;
        } else {
          island += 1;
          findIsland(i, j);
        }
      }
    }
    return island;
  }
}

// grid = [
//   ["0", "1", "1", "1", "0"],
//   ["0", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

grid = [
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(new Solution().numIslands(grid));
