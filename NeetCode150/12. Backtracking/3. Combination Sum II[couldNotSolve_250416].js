class Solution {
  constructor() {}

  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);

    const dfs = (idx, curr, sum) => {
      if (target === sum) {
        return res.push([...curr]);
      }

      for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] === candidates[i - 1]) {
          continue;
        }

        if (sum + candidates[i] > target) {
          break;
        }
        curr.push(candidates[i]);
        dfs(i + 1, curr, sum + candidates[i]);
        curr.pop();
      }
    };

    dfs(0, [], 0);
    return res;
  }
}

(candidates = [9, 2, 2, 4, 6, 1, 5]), (target = 8);
console.log(new Solution().combinationSum2(candidates, target));
