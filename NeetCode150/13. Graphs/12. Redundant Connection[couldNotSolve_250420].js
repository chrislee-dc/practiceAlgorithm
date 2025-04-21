class Solution {
  /**
   * @param {number[][]} edges
   * @return {number[]}
   */
  findRedundantConnection(edges) {
    let map = new Map();

    let hasCycle = (node, target, set) => {
      if (node === target) return true;
      set.add(node);

      for (let newNode of map.get(node) || []) {
        if (!set.has(newNode) && hasCycle(newNode, target, set)) {
          return true;
        }
      }
      return false;
    };

    for (let i = 0; i < edges.length; i++) {
      let [start, end] = edges[i];

      if (map.has(start) && map.has(end)) {
        if (hasCycle(start, end, new Set())) {
          return [start, end];
        }
      }

      if (!map.has(start)) map.set(start, []);
      if (!map.has(end)) map.set(end, []);

      map.get(start).push(end);
      map.get(end).push(start);
    }

    return [];
  }
}

edges = [
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 4],
];

// (2, 4);

// edges = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [3, 4],
//   [4, 5],
// ];

// edges = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 5],
//   [5, 6],
//   [6, 3],
// ];

console.log(new Solution().findRedundantConnection(edges));

//  edges = [[1,2],[1,3],[1,4],[3,4],[4,5]]

//  [3,4]
