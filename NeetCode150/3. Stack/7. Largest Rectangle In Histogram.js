// Largest Rectangle In Histogram
// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

// Return the area of the largest rectangle that can be formed among the bars.

// Note: This chart is known as a histogram.

// Example 1:

// Input: heights = [7,1,7,2,2,4]

// Output: 8
// Example 2:

// Input: heights = [1,3,7]

// Output: 7
// Constraints:

// 1 <= heights.length <= 1000.
// 0 <= heights[i] <= 1000

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let max = 0;
    let stack = [];

    for (let i = 0; i < heights.length; i++) {
      let start = i;
      while (stack.length && stack[stack.length - 1][1] > heights[i]) {
        const [index, height] = stack.pop();
        max = Math.max(max, height * (i - index));
        start = index;
        // max = Math.max(max, stack[1] * (stack[0]))
      }
      stack.push([start, heights[i]]);
    }

    for (let i = 0; i < stack.length; i++) {
      max = Math.max(max, stack[i][1] * (heights.length - stack[i][0]));
    }

    return max;
  }
}

new Solution().largestRectangleArea([7, 1, 7, 2, 2, 4]);
