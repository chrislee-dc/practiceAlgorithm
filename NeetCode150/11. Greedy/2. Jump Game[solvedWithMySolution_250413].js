class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let jump = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (jump === 0) return false;

      jump = Math.max(jump - 1, nums[i]);
    }

    return true;
  }
}

// nums = [1, 2, 0, 1, 0];
// nums = [1, 2, 1, 0, 1];
// nums = [3, 2, 1, 0, 4];
// nums = [2, 3, 1, 1, 4];
nums = [0, 2, 3];

console.log(new Solution().canJump(nums));
