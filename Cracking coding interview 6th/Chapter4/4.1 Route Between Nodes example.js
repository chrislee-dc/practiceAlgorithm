function hasRoute(graph, start, end) {
  if (start === end) return true;

  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();
    for (let neighbor of graph[node]) {
      if (neighbor === end) return true;
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

const graph = {
  A: ["B", "C"],
  B: ["C", "D"],
  C: ["D"],
  D: ["C"],
  E: ["F"],
  F: [],
};

console.log(hasRoute(graph, "A", "D")); // true
console.log(hasRoute(graph, "A", "F")); // false
