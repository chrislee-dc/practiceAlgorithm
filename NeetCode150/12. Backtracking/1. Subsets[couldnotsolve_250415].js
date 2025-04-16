class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    const res = [];
    const subset = [];
    this.dfs(nums, 0, subset, res);
    return res;
  }

  /**
   * @param {number[]} nums
   * @param {number} i
   * @param {number[]} subset
   * @param {number[][]} res
   * @return {void}
   */
  dfs(nums, i, subset, res) {
    if (i >= nums.length) {
      return res.push([...subset]);
    }
    subset.push(nums[i]);
    this.dfs(nums, i + 1, subset, res);
    subset.pop();
    this.dfs(nums, i + 1, subset, res);
  }
}

nums = [1, 2, 3];

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
new Solution().subsets(nums);
