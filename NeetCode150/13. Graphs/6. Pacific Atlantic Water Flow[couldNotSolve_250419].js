class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    let ROWS = heights.length;
    let COLS = heights[0].length;
    let PAC = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let ALT = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

    const dfs = (r, c, set) => {
      set[r][c] = true;

      let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dr, dc] of directions) {
        let newR = r + dr;
        let newC = c + dc;

        if (
          newR >= 0 &&
          newC >= 0 &&
          newR < ROWS &&
          newC < COLS &&
          !set[newR][newC] &&
          heights[newR][newC] >= heights[r][c]
        ) {
          dfs(newR, newC, set);
        }
      }
    };

    for (let i = 0; i < COLS; i++) {
      dfs(0, i, PAC);
      dfs(ROWS - 1, i, ALT);
    }

    for (let i = 0; i < ROWS; i++) {
      dfs(i, 0, PAC);
      dfs(i, COLS - 1, ALT);
    }

    const res = [];
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (PAC[i][j] && ALT[i][j]) {
          res.push([i, j]);
        }
      }
    }
    return res;
  }
}

heights = [
  [4, 2, 7, 3, 4],
  [7, 4, 6, 4, 7],
  [6, 3, 5, 3, 6],
];

heights = [[1], [1]];

new Solution().pacificAtlantic(heights);
