// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile.
// You are also given an integer h, which represents the number of hours you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k.
// Each hour, you may choose a pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.

// Example 1:
// Input: piles = [1,4,3,2], h = 9

// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours.
// With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

// Example 2:

// Input: piles = [25,10,23,4], h = 4

// Output: 25
// Constraints:

// 1 <= piles.length <= 1,000
// piles.length <= h <= 1,000,000
// 1 <= piles[i] <= 1,000,000,000

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let r = Math.max(...piles);
    let l = 1;
    let result = r;

    while (l < r) {
      let m = Math.floor((l + r) / 2);

      let totalTime = 0;
      for (let i of piles) {
        totalTime += Math.ceil(i / m);
      }

      if (totalTime <= h) {
        result = m;
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return result;
  }
}

// [1,2,3,4,5,6,7,8,9,10,11] //

new Solution().minEatingSpeed([3, 6, 7, 11], 8);
// [1,4,3,2], h = 9
// [25,10,23,4], h = 4
