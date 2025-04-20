class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    let map = new Map();
    for (let [start, end] of edges) {
      if (!map.has(start)) map.set(start, []);
      if (!map.has(end)) map.set(end, []);
      map.get(start).push(end);
      map.get(end).push(start);
    }

    const set = new Set();

    const dfs = (node, preValue) => {
      if (set.has(node)) {
        return false;
      }

      if (map.get(node).length === 0) {
        return true;
      }

      set.add(node);

      for (let newNode of map.get(node)) {
        if (newNode === preValue) {
          continue;
        }
        dfs(newNode, node);
      }

      map.set(node, []);

      return true;
    };

    let count = 0;
    // for (let key of [...map.keys()]) {
    //   if (map.get(key).length) {
    //     if (!dfs(key, -1)) return 1;
    //     count++;
    //   }
    // }

    for (let i = 0; i < n; i++) {
      if (map.get(i)) {
        if (!set.has(i)) {
          dfs(i, -1);
          count++;
        }
      } else {
        count++;
      }
    }
    // console.log("🚀 ~ Solution ~ countComponents ~ count:", count);
    return count;
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
