class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    let res = Array(n + 1).fill(0);
    let offset = 1;
    for (let i = 1; i < n; i++) {
      if (offset * 2 === i) {
        offset = i;
      }
      res[i] = 1 + res[i - offset];
    }
  }
}

new Solution().countBits(4);
