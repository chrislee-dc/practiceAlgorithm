class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const set = new Set();
    const queue = new Queue();

    const checkFruit = (r, c) => {
      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        grid[r][c] === 0 ||
        grid[r][c] === 2 ||
        set.has(`${r},${c}`)
      ) {
        return;
      }
      set.has(`${r},${c}`);
      queue.enqueue([r, c]);
      grid[r][c] = 2;
      return true;
    };

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 2) {
          set.add(`${r},${c}`);
          queue.enqueue([r, c]);
        }
      }
    }

    let time = 0;
    while (queue.size()) {
      let currSize = queue.size();
      let isChange = false;
      for (let i = 0; i < currSize; i++) {
        let [r, c] = queue.dequeue();
        let a = checkFruit(r + 1, c) ? true : false;
        let b = checkFruit(r - 1, c) ? true : false;
        let d = checkFruit(r, c + 1) ? true : false;
        let e = checkFruit(r, c - 1) ? true : false;
        if (!isChange && (a || b || d || e)) {
          isChange = true;
        }
      }

      // console.log("🚀 ~ Solution ~ orangesRotting ~ isChange:", isChange);
      if (isChange) {
        time++;
      }
    }

    // console.log(
    //   "🚀 ~ Solution ~ orangesRotting ~ grid:",
    //   grid.some((items) => items.includes(1))
    // );
    return grid.some((items) => items.includes(1)) ? -1 : time;
  }
}
