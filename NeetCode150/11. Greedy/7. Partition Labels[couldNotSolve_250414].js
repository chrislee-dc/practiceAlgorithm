class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(S) {
    let lastIndex = {};
    for (let i = 0; i < S.length; i++) {
      lastIndex[S[i]] = i;
    }

    let res = [];
    let count = 0;
    let end = 0;
    for (let i = 0; i < S.length; i++) {
      count++;
      end = Math.max(end, lastIndex[S[i]]);

      if (end === i) {
        res.push(count);
        count = 0;
      }
    }
    return res;
  }
}

s = "xyxxyzbzbbisl";

new Solution().partitionLabels(s);
// new Solution().mergeTriplets(s);
