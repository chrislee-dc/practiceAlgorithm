class GraphNode {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function createGraph(adjList) {
  if (adjList.length === 0) return null;

  const nodes = new Map();
  for (let i = 0; i < adjList.length; i++) {
    nodes.set(i + 1, new GraphNode(i + 1));
  }

  for (let i = 0; i < adjList.length; i++) {
    const node = nodes.get(i + 1);
    node.neighbors = adjList[i].map((n) => nodes.get(n));
  }

  return nodes.get(1);
}

module.exports = { createGraph, GraphNode };
