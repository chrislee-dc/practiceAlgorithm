class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    return Math.max(
      this.robLinear(nums.slice(1)),
      this.robLinear(nums.slice(0, -1))
    );
  }

  /**
   * Helper function to rob a linear list of houses
   * @param {number[]} nums
   * @return {number}
   */
  robLinear(nums) {
    let prevMax = 0;
    let currMax = 0;

    for (const num of nums) {
      const temp = currMax;
      currMax = Math.max(prevMax + num, currMax);
      prevMax = temp;
    }

    return currMax;
  }
}

new Solution().rob([1, 2, 3, 4, 5]);
