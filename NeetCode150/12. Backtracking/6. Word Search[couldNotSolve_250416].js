class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const dfs = (i, r, c) => {
      if (i === word.length) {
        return true;
      }

      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        word[i] !== board[r][c] ||
        board[r][c] === "#"
      ) {
        return false;
      }

      let originalValue = board[r][c];
      board[r][c] = "#";
      const res =
        dfs(i + 1, r + 1, c) ||
        dfs(i + 1, r - 1, c) ||
        dfs(i + 1, r, c + 1) ||
        dfs(i + 1, r, c - 1);
      board[r][c] = originalValue;
      return res;
    };

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (dfs(0, i, j)) return true;
      }
    }
    return false;
  }
}

board = [
  ["A", "B", "C", "D"],
  ["S", "A", "A", "T"],
  ["A", "C", "A", "E"],
];
word = "BAT";

console.log(new Solution().exist(board, word));
