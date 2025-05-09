class Solution {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    for (let i = cost.length - 3; i > 0; i--) {
      cost[i] += Math.max(cost[i + 1], cost[i + 2]);
    }

    return Math.min(cost[0], cost[1]);
  }
}

cost = [1, 2, 3];
// cost = [1, 2, 1, 2, 1, 1, 1];
// cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(new Solution().minCostClimbingStairs(cost));
