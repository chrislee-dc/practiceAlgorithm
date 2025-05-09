// numCourses = 2, prerequisites = [[0,1]] // true
// numCourses = 2, prerequisites = [[0,1],[1,0]] // false
// numCourses = 6, prerequisites = [[1, 0], [3, 2], [5, 4]] // true
// numCourses = 5, prerequisites = [[2, 0], [2, 1], [3, 2], [4, 2]] // true

// numCourses = 5, prerequisites = [[1, 0], [2, 0], [3, 0], [4, 0]] // true
// numCourses = 3, prerequisites = [[0, 0]] // false

// numCourses = 4, prerequisites = [[1, 0], [2, 1], [3, 2], [1, 3]] // false
class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    const map = new Map();

    for (let i = 0; i < numCourses; i++) {
      map.set(i, []);
    }

    for (const [course, pre] of prerequisites) {
      map.get(course).push(pre);
    }

    const visiting = new Set();

    const dfs = (course) => {
      if (visiting.has(course)) {
        return false;
      }

      if (map.get(course).length === 0) {
        return true;
      }

      visiting.add(course);
      for (let pre of map.get(course)) {
        if (!dfs(pre)) {
          return false;
        }
      }
      visiting.delete(course);
      map.set(course, []); // Mark as visited
      return true;
    };

    for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) {
        return false;
      }
    }

    return true;
  }
}

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
    [1, 3],
  ]);

new Solution().canFinish(numCourses, prerequisites);
