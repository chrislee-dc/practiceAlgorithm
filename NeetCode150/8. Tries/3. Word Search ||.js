class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Solution {
    constructor() {
        this.root = new TrieNode();
    }

    addWords(words) {
        for (const word of words) {
            let node = this.root;
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.endOfWord = true;
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    findWords(board, words) {
        this.addWords(words);

        const result = new Set();
        const ROWS = board.length;
        const COLS = board[0].length;

        const dfs = (r, c, node, word) => {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                !node.children[board[r][c]] ||
                board[r][c] === "#"
            ) {
                return;
            }

            let originalValue = board[r][c];
            board[r][c] = "#";
            word += originalValue;
            node = node.children[originalValue];

            if (node.endOfWord) {
                result.add(word);
            }

            dfs(r + 1, c, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r, c - 1, node, word);

            board[r][c] = originalValue;
        };

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                dfs(i, j, this.root, "");
            }
        }

        return Array.from(result);
    }
}

// Input:
board = [
    ["a", "b", "c", "d"],
    ["s", "a", "a", "t"],
    ["a", "c", "k", "e"],
    ["a", "c", "d", "n"],
];
// words = ["bat", "cat", "back", "backend", "stack"];
words = ["cat"];

new Solution().findWords(board, words);
