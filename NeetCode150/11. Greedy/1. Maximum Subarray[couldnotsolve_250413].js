class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let result = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (currSum < 0) {
        currSum = 0;
      }
      currSum += nums[i];
      result = Math.max(currSum, result);
    }

    return result;
  }
}

nums = [2, -3, 4, -2, 2, 1, -1, 4];

new Solution().maxSubArray(nums);
