// Description
// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0
// represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)

// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the current board.

// The length of board will be in the range [3, 50].
// The length of board[i] will be in the range [3, 50].
// Each board[i][j] will initially start as an integer in the range [1, 2000].

// Input: [[1,3,5,5,2],
//         [3,4,3,3,1],
//         [3,2,4,5,2],
//         [2,4,4,5,5],
//         [1,4,4,1,1]]

// Output: [[1,3,0,0,0],
//          [3,4,0,5,2],
//          [3,2,0,3,1],
//          [2,4,0,5,2],
//          [1,4,3,1,1]]

//  # 터질거 표시 (표시를 모두하고)
//  # 제거 ( 한번에)
//  # 떨어트림
//  # 반복

//  [
// 	[1,3,0,5,2],
//   [3,4,0,3,1],
//   [3,2,0,5,2],
//   [2,4,5,5,5],
//   [1,4,3,1,1]
// ]

// [
// 	[1,3,0,0,0],
//   [3,4,0,5,2],
//   [3,2,0,3,1],
//   [2,4,0,5,2],
//   [1,4,3,1,1]
// ]

var candyCrush = function (board) {
    const m = board.length;
    const n = board[0].length;
    let found = false;

    while (true) {
        found = false;
        // Step 1: mark candies to crush
        let crush = Array.from({ length: m }, () => Array(n).fill(false));

        // Check horizontally
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n - 2; j++) {
                let v = Math.abs(board[i][j]);
                if (
                    v !== 0 &&
                    Math.abs(board[i][j + 1]) === v &&
                    Math.abs(board[i][j + 2]) === v
                ) {
                    crush[i][j] = crush[i][j + 1] = crush[i][j + 2] = true;
                    found = true;
                }
            }
        }

        // Check vertically
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < m - 2; i++) {
                let v = Math.abs(board[i][j]);
                if (
                    v !== 0 &&
                    Math.abs(board[i + 1][j]) === v &&
                    Math.abs(board[i + 2][j]) === v
                ) {
                    crush[i][j] = crush[i + 1][j] = crush[i + 2][j] = true;
                    found = true;
                }
            }
        }

        if (!found) break;

        // Step 2: crush marked candies
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (crush[i][j]) {
                    board[i][j] = 0;
                }
            }
        }

        // Step 3: drop candies
        for (let j = 2; j < n; j++) {
            let writeRow = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] > 0) {
                    board[writeRow][j] = board[i][j];
                    writeRow--;
                }
            }
            // fill the rest with 0
            for (let i = writeRow; i >= 0; i--) {
                board[i][j] = 0;
            }
        }
    }

    return board;
};

let board = [
    [1, 3, 5, 5, 2],
    [3, 4, 3, 3, 1],
    [3, 2, 4, 5, 2],
    [2, 4, 4, 5, 5],
    [1, 4, 4, 1, 1],
];

candyCrush(board);
