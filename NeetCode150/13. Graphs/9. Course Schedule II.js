class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    const map = new Map();

    for (let i = 0; i < numCourses; i++) {
      map.set(i, []);
    }

    for (let i = 0; i < prerequisites.length; i++) {
      let [course, pre] = prerequisites[i];
      map.get(course).push(pre);
    }

    const dfs = (course, set) => {
      if (set.has(course)) {
        return false;
      }

      if (map.get(course).length === 0) {
        return true;
      }

      set.add(course);

      for (let pre of map.get(course)) {
        if (!dfs(pre, set)) {
          return false;
        }
      }

      map.set(course, []);
      result.push(course);
      return true;
    };

    const result = [];
    let tempSet = null;

    for (let i = 0; i < numCourses; i++) {
      tempSet = new Set();
      if (!dfs(i, tempSet)) {
        return false;
      }
    }

    console.log("🚀 ~ Solution ~ findOrder ~ result:", result);
    return result.reverse();
  }
}

// (numCourses = 3), (prerequisites = [[1, 0]]);
// (numCourses = 3),
//   (prerequisites = [
//     [0, 1],
//     [1, 2],
//     [2, 0],
//   ]);

// (numCourses = 4),
//   (prerequisites = [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ]);

// (numCourses = 2), (prerequisites = [[1, 0]]);

// (numCourses = 2), (prerequisites = [[0, 1]]);

// (numCourses = 1), (prerequisites = []);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);

new Solution().findOrder(numCourses, prerequisites);
