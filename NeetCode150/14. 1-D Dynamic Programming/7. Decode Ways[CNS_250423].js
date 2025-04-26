class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(s) {
    let n = s.length;
    let arr = Array(n + 1).fill(0);
    arr[n] = 1;

    for (let i = s.length - 1; i > -1; i--) {
      if (s[i] !== "0") {
        arr[i] = arr[i + 1];

        if (i + 1 < n && (s[i] === "1" || (s[i] <= "2" && s[i + 1] <= "6"))) {
          arr[i] += arr[i + 2];
        }
      }
    }
    return arr[0];
  }
}

s = "11106";
new Solution().numDecodings(s);
