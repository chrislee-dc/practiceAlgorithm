/**
 * @important 문제 설명:
 * boarder쪽에 걸려있지 않은 모든 것들은 전부다 X로 바뀌어야 한다
 * 이게 approach임
 */

class Solution {
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const dfs = (r, c) => {
      if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== "O") {
        return;
      }

      board[r][c] = "#";
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    };

    for (let i = 0; i < COLS; i++) {
      dfs(0, i);
      dfs(ROWS - 1, i);
    }

    for (let i = 0; i < ROWS; i++) {
      dfs(i, 0);
      dfs(i, COLS - 1);
    }

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (board[i][j] === "#") {
          board[i][j] = "O";
        } else if (board[i][j] === "O") {
          board[i][j] = "X";
        }
      }
    }
    console.log("🚀 ~ Solution ~ solve ~ board:", board);
    return board;
  }
}

board = [
  ["O", "X", "X", "O", "X"],
  ["X", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "O", "O"],
  ["X", "X", "O", "X", "O"],
];

// my output
// [
//   ["O", "X", "X", "O", "X"],
//   ["X", "X", "X", "X", "O"],
//   ["X", "X", "X", "X", "X"],
//   ["O", "X", "O", "O", "O"],
//   ["X", "X", "O", "X", "O"],
// ];

// expected output [
//   ["O", "X", "X", "O", "X"],
//   ["X", "X", "X", "X", "O"],
//   ["X", "X", "X", "O", "X"],
//   ["O", "X", "O", "O", "O"],
//   ["X", "X", "O", "X", "O"],
// ];

// board = [
//   ["X", "X", "X"],
//   ["X", "O", "X"],
//   ["O", "O", "O"],
//   ["O", "X", "O"],
// ];

new Solution().solve(board);
