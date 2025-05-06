// Search in Rotated Sorted Array
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:

// Input: nums = [3,4,5,6,1,2], target = 1

// Output: 4
// Example 2:

// Input: nums = [3,5,6,0,1,2], target = 4

// Output: -1
// Constraints:

// 1 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -1000 <= target <= 1000

/**
 * @Explanations
 *
 * nums: [3, 5, 6, 0, 1, 2]
 * target 0
 *
 * First If statement
 * 1. 맨 처음 mid를 계산하고 첫번째 if statement인 3,5,6을 보면된다 (이미 ascending order인게 첫번째 if statement에서 증명된다)
 * 그다음 if statement에서는 target이 3,5,6 중에 어느 경우가 "없는지"를 계산해보면된다
 *
 * 다시 말해 만약에 left 가 3 이니깐 target 보다 left가 클때 ascending order이니깐 l 을 움직여야 한다
 * 혹은 6보다 target이 크면 (우리는 3,5,6만 보고 있는중) 이 또한 left가 움직여야한다
 *
 * 하지만 처음 else statement를 볼때 만약에 우리 array 가
 * nums: [6,0,1,2]
 * target: 6
 * 일때
 * 처음 else statement로 들어가게 되고 그 다음에 우리는 0, 1, 2를 검사하게 될것이다
 * 그래서 right 여기서는 2를 봤을때 만약에 2보다 target이 크면 right값이 바뀌어야 한다
 * 혹은 mid 값이 0인데 여기서는 이때 0보다 타겟값이 작으면 이 또한 right값이 바뀌어야한다
 * "혹은 mid 값이 0인데 여기서는 이때 0보다 타겟값이 작으면 이 또한 right값이 바뀌어야한다" <= 다시말해서
 * target이 1일때 0 보다 크니깐 이때는 left값이 바뀌어야하지만 만약에 작을때는 반대로 right로 움직여야한다
 */

//  if(nums[r] < target || target < nums[mid]) {

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      let m = Math.floor((r + l) / 2);

      if (target === nums[m]) {
        return m;
      }

      if (nums[l] <= nums[m]) {
        if (nums[l] > target || target > nums[m]) {
          l = m + 1;
        } else {
          r = m - 1;
        }
      } else {
        if (nums[r] < target || target < nums[m]) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      }
    }
    // console.log("🚀 ~ Solution ~ search ~ result:", result);
    return -1;
  }
}

new Solution().search([6, 0, 1, 2], 6);
// new Solution().search([3, 5, 6, 0, 1, 2], 5);
// new Solution().search([3, 5, 6, 0, 1, 2], 0);
// new Solution().search([3, 5, 6, 0, 1, 2], 4);
// new Solution().search([3,4,5,6,1,2], 1);

// nums = [3,4,5,6,1,2], target = 1
/**
 * 3, 5
 *
 */

// nums = [3,5,6,0,1,2], target = 4
//
