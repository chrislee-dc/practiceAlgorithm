class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const res = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i > -1; i--) {
      for (let j = i + 1; i < nums.length; i++) {
        res[i] = Math.max(res[i], res[j] + 1);
      }
    }

    return Math.max(...res);
  }
}

nums = [9, 1, 4, 2, 3, 3, 7];
// nums = [0, 3, 1, 3, 2, 3];
nums = [10, 9, 2, 5, 3, 7, 101, 18];
nums = [0, 1, 0, 3, 2, 3];

new Solution().lengthOfLIS(nums);
