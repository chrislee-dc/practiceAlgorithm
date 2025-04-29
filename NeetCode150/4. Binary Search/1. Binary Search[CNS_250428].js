// Binary Search
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in
// O // ( // l // o // g // n // )
// O(logn) time.

// Example 1:

// Input: nums = [-1,0,2,4,6,8], target = 4

// Output: 3
// Example 2:

// Input: nums = [-1,0,2,4,6,8], target = 3

// Output: -1
// Constraints:

// 1 <= nums.length <= 10000.
// -10000 < nums[i], target < 10000

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0,
      r = nums.length;

    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (nums[m] >= target) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    return nums[l] === target ? l : -1;
  }
}

new Solution().search([-1, 0, 2, 4, 6, 8], 4);
