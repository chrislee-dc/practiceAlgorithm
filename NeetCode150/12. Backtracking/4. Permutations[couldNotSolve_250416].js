class Solution {
  constructor() {}

  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    const res = [];

    const backTracking = (idx) => {
      if (idx === nums.length) {
        return res.push(nums);
      }

      for (let i = idx; i < nums.length; i++) {
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        backTracking(idx + 1);
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
      }
    };
    backTracking;
    return res;
  }
}

nums = [1, 2, 3];
new Solution().permute(nums);
