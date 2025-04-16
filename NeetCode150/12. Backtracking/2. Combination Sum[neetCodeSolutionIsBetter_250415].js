class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums, target) {
    const res = [];
    const subset = [];
    this.dfs(nums, 0, subset, res, target, 0);
    return res;
  }

  /**
   * @param {number[]} nums
   * @param {number} i
   * @param {number[]} subset
   * @param {number[][]} res
   * @return {void}
   */
  dfs(nums, i, subset, res, target, sum) {
    if (sum > target || i >= nums.length) {
      return;
    } else if (sum === target) {
      return res.push([...subset]);
    } else {
      subset.push(nums[i]);
      sum += nums[i];
      this.dfs(nums, i, subset, res, target, sum);
      subset.pop();
      sum -= nums[i];
      this.dfs(nums, i + 1, subset, res, target, sum);
    }
  }
}

nums = [2, 3];
target = 6;

new Solution().subsets(nums, target);
