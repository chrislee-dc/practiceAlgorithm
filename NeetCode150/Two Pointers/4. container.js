// Container With Most Water
// You are given an integer array heights where heights[i] represents the height of the
// i
// t
// h
// i
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4
// Constraints:

// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

/**
 * @Quesiton :why should I move only smaller number?
 */

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let l = 0;
    let r = heights.length - 1;
    let res = 0;

    while (l < r) {
      const area = Math.min(heights[l], heights[r]) * (r - l);
      res = Math.max(res, area);
      if (heights[l] <= heights[r]) {
        l++;
      } else {
        r--;
      }
    }
    return res;
  }
}

// Input: height =

// Output: 36

// new Solution().maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
console.log(
  "🚀 ~ new Solution().maxArea([1, 7, 2, 5, 4, 7, 3, 6]);:",
  new Solution().maxArea([1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6])
);
