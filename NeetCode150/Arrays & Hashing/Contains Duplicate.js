// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    return new Set(nums).size < nums.length;
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}
