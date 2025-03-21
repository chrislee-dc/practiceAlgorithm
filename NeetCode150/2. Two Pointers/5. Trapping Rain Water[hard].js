// Trapping Rain Water
// You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

// Example 1:

// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9
// Constraints:

// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000

/**
 * @description
 *
 * 0.
 * 1. array element 둘중에 작은거를 기준으로 그 안에 있는 element를 더하기 때문에 if statement 로 비교를 하는거다
 */

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    if (!height || height.length === 0) {
      return 0;
    }

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;
    while (l < r) {
      if (leftMax < rightMax) {
        l++;
        leftMax = Math.max(leftMax, height[l]);
        res += leftMax - height[l];
      } else {
        r--;
        rightMax = Math.max(rightMax, height[r]);
        res += rightMax - height[r];
      }
    }
    return res;
  }
}

console.log(
  "🚀 ~ new Solution().trap([0,2,0,3,1,0,1,3,2,1]);:",
  // new Solution().trap([0, 3, 0, 2, 1, 0, 1, 3, 99, 0, 99, 2, 1]),
  new Solution().trap([0, 3, 0, 2, 1, 0, 100])
);
