class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let subArr = [];
    this.dfs(candidates, target, res, 0, subArr, 0);
    return res;
  }

  dfs(candidates, target, res, sum, subArr, i) {
    if (sum === target) {
      return res.push([...subArr]);
    } else if (sum > target || i >= candidates.length) {
      return;
    } else {
      subArr.push(candidates[i]);
      sum = sum + candidates[i];
      this.dfs(candidates, target, res, sum, subArr, i + 1);

      subArr.pop();
      sum = sum - candidates[i];
      this.dfs(candidates, target, res, sum, subArr, i + 1);
    }
  }
}

(candidates = [9, 2, 2, 4, 6, 1, 5]), (target = 8);
new Solution().combinationSum2(candidates, target);
