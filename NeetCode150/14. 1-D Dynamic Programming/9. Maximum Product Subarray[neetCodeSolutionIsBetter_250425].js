class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    if (nums.length < 2) return nums[0];
    let res = null;
    let prefix = 0;
    let suffix = 0;

    for (let i = 0; i < nums.length; i++) {
      prefix = nums[i] * (prefix === 0 ? 1 : prefix);
      suffix = nums[nums.length - 1 - i] * (suffix === 0 ? 1 : suffix);
      res = Math.max(res, prefix, suffix);
    }
    return res;
  }
}

nums = [1, 2, -3, 4];
// nums = [-2, -1];
// nums = [2, 3, -2, 4];
// nums = [-2, 0, -1];
nums = [-2, -3];
nums = [2, 3, 0, 4, 5];
nums = [-1, -2, -3, -4];
nums = [-1, -2, -3];

console.log(new Solution().maxProduct(nums));
