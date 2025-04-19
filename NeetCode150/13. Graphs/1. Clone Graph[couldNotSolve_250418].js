class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    const oldToNew = new Map();
    return this.dfs(node, oldToNew);
  }

  /**
   * @param {Node} node
   * @param {Map} oldToNew
   * @return {Node}
   */
  dfs(node, oldToNew) {
    if (node === null) {
      return null;
    }

    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    const copy = new Node(node.val);
    oldToNew.set(node, copy);

    for (const nei of node.neighbors) {
      copy.neighbors.push(this.dfs(nei, oldToNew));
    }

    return copy;
  }
}

adjList = [[2], [1, 3], [2]];
const graphNode = createGraph(adjList);
console.log("🚀 ~ graphNode:", graphNode.neighbors[0].neighbors[1].neighbors);

const result = new Solution().cloneGraph(graphNode);
console.log(result.neighbors[0].neighbors[1].neighbors);
