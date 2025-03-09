// Two Integer Sum II
// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use
// O
// (
// 1
// )
// O(1) additional space.

// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]
// Explanation:
// The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 1000
// -1000 <= numbers[i] <= 1000
// -1000 <= target <= 1000

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    const map = new Map();
    map.set(numbers[0], 0);
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] === target) continue;
      const targetNum = target - numbers[i];
      if (map.has(targetNum)) {
        return [map.get(targetNum), i];
      } else {
        map.set(numbers[i], i);
      }
    }
  }
}

class Solution2 {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      const sum = numbers[l] + numbers[r];

      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return [l + 1, r + 1];
      }
    }
    return [];
  }
}

// new Solution().twoSum([1, 2, 3, 4], 3);
console.log(
  "🚀 ~ new Solution().twoSum([1, 2, 3, 4], 3);:",
  new Solution2().twoSum([1, 2, 3, 4], 3)
);
