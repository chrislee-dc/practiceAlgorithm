class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    let map = new Map();

    for (let i = 0; i < n; i++) {
      map.set(i, []);
    }

    for (let [start, end] of edges) {
      map.get(start).push(end);
      map.get(end).push(start);
    }

    const set = new Set();

    const dfs = (node) => {
      if (set.has(node)) {
        return;
      }

      set.add(node);

      for (let neighbour of map.get(node)) {
        dfs(neighbour);
      }
    };

    let count = 0;
    for (let i = 0; i < n; i++) {
      if (!set.has(i)) {
        dfs(i);
        count++;
      }
    }
  }
}

(n = 6),
  (edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
  ]);

// n = 3;
// edges = [
//   [0, 1],
//   [0, 2],
// ];

// edges = [
//   [0, 1],
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [6, 7],
// ];

// n = 6;
// edges = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// n = 5;
// edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ];

// n = 3;
// edges = [
//   [0, 1],
//   [0, 2],
//   [1, 2],
// ];

n = 12;
edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
];

new Solution().countComponents(n, edges);
