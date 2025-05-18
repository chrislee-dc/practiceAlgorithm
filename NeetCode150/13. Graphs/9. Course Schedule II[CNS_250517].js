class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    const map = new Map();
    const result = [];
    const visited = new Set();
    const visiting = new Set();

    // Initialize graph
    for (let i = 0; i < numCourses; i++) {
      map.set(i, []);
    }

    // Build edges: pre -> course
    for (const [course, pre] of prerequisites) {
      map.get(pre).push(course);
    }

    const dfs = (course) => {
      if (visiting.has(course)) return false; // cycle
      if (visited.has(course)) return true; // already done

      visiting.add(course);

      for (const neighbor of map.get(course)) {
        if (!dfs(neighbor)) return false;
      }

      visiting.delete(course);
      visited.add(course);
      result.push(course);

      return true;
    };

    for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) return []; // cycle detected
    }

    return result;
  }
}

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);

new Solution().findOrder(numCourses, prerequisites);
