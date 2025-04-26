class Solution {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (coin <= i) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
  }
}

// coins = [1,5,10], amount = 12
(coins = [1, 4, 6]), (amount = 8);
(coins = [1, 2, 5]), (amount = 11);
new Solution().coinChange(coins, amount);
