class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    if (n - 1 !== edges.length) {
      return false;
    }

    let map = new Map();

    for (let [start, end] of edges) {
      if (!map.has(start)) map.set(start, []);
      if (!map.has(end)) map.set(end, []);

      map.get(start).push(end);
      map.get(end).push(start);
    }

    const set = new Set();

    let dfs = (node, preValue) => {
      if (set.has(node)) {
        return false;
      }

      set.add(node);

      for (let child of map.get(node)) {
        if (child === preValue) continue;
        if (!dfs(child, node)) {
          return false;
        }
      }
      return true;
    };

    return !dfs(0, -1) && set.size === n;
  }
}

n = 5;
edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];

// n = 4;
// edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
// ];

// n = 5;
// edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [1, 3],
//   [1, 4],
// ];

// n = 4;
// edges = [
//   [0, 1],
//   [2, 3],
// ];

// n = 1;
// edges = [];

// n = 3;
// edges = [
//   [0, 1],
//   [1, 2],
//   [2, 0],
// ];

n = 5;
edges = [
  [0, 1],
  [2, 0],
  [3, 0],
  [1, 4],
];

console.log(new Solution().validTree(n, edges));
