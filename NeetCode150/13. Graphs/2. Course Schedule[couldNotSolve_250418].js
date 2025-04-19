const { Queue } = require("@datastructures-js/queue");

class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const set = new Set();
    const queue = new Queue();

    const addNum = (r, c, distance) => {
      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        grid[r][c] === -1 ||
        set.has(`${r},${c}`)
      ) {
        return;
      }
      set.add(`${r},${c}`);
      queue.enqueue([r, c]);
      grid[r][c] = distance;
    };

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) {
          queue.enqueue([i, j]);
          set.add(`${i},${j}`);
        }
      }
    }

    let distance = 1;

    while (queue.size()) {
      const currSize = queue.size();
      for (let i = 0; i < currSize; i++) {
        let [r, c] = queue.dequeue();
        addNum(r + 1, c, distance);
        addNum(r - 1, c, distance);
        addNum(r, c + 1, distance);
        addNum(r, c - 1, distance);
      }
      distance++;
    }

    return grid;
  }
}

grid = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

// grid = [
//   [0, -1],
//   [2147483647, 2147483647],
// ];

new Solution().islandsAndTreasure(grid);
