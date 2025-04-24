class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  countSubstrings(s) {
    let count = 0;

    const expandAroundCenter = (l, r) => {
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++;
        l--;
        r++;
      }
    };

    for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i);
      expandAroundCenter(i, i + 1);
    }

    return count;
  }
}

s = "aaa";
new Solution().countSubstrings(s);
