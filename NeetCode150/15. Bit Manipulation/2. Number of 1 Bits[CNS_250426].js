class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    let res = 0;
    while (n !== 0) {
      console.log(n.toString(2));
      n &= n - 1;
      res++;
    }
    return res;
  }
}

new Solution().hammingWeight(13);
