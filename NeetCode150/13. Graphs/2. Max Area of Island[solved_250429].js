function maxAreaOfIsland(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
      return 0;
    }

    grid[r][c] = 0; // mark as visited
    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };

  let maxArea = 0;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}
