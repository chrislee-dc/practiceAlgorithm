class ChatGptSolution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  jump(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
      if (i === currentEnd) {
        jumps++;
        currentEnd = farthest;
      }
    }

    return jumps;
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  jump(nums) {
    let jumps = 0;
    let nextJump = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums.length - 1 <= nums[i] + jumps) {
        return jumps + 1;
      } else {
        nextJump = nextJump - 1;
        jumps = nextJump <= 0 ? jumps + 1 : jumps;
        nextJump = Math.max(nextJump, nums[i]);
      }
    }

    return jumps;
  }
}

nums = [2, 3, 0, 1, 4];
// nums = [2, 1];
console.log(new Solution().jump(nums));
