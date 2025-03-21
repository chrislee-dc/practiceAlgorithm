// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

/** 0 1 2 3
 *  3 2 1 0
 * [1,2,3,4]
 *
 * [24, 12, 8, 6]
 *
 * [6, 12, 4, 2]
 *
 */

/**
 * Ref Link: https://velog.io/@soopy368/LeetCode-238.-Product-of-array-except-self
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const length = nums.length;
    const result = Array(length).fill(1);

    for (let i = 1; i < result.length; i++) {
      result[i] = result[i - 1] * nums[i - 1];
    }

    let postFix = 1;
    for (let i = length - 1; i > -1; i--) {
      result[i] = result[i] * postFix;
      postFix = postFix * nums[i];
    }

    return result;
  }
}

new Solution().productExceptSelf([1, 2, 3, 4]);
