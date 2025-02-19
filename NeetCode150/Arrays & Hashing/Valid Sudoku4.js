/**
 *
 * Quesiton: how can this code validate checking only duplicates and knows it is true or not????
 */

class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = board[i][j];
        if (val === ".") continue;

        const squaresKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;

        if (
          rows.get(i)?.has(val) ||
          cols.get(j)?.has(val) ||
          squares.get(squaresKey)?.has(val)
        ) {
          return false;
        }

        if (!rows.has(i)) rows.set(i, new Set());
        if (!cols.has(j)) cols.set(j, new Set());
        if (!squares.has(squaresKey)) {
          squares.set(squaresKey, new Set());
        }

        cols.get(j).add(val);
        rows.get(i).add(val);
        squares.get(squaresKey).add(val);
      }
    }
    return true;
  }
}

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "1"],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(new Solution().isValidSudoku(board2));
