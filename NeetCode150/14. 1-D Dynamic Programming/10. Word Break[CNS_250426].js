class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict) {
    let memo = {
      [s.length]: true,
    };

    let dfs = (i) => {
      if (memo[i]) {
        return memo[i];
      }

      for (let word of wordDict) {
        if (
          i + word.length <= s.length &&
          s.substring(i, i + word.length) === word
        ) {
          if (dfs(i + word.length)) {
            memo[i] = true;
            return true;
          }
        }
      }
    };

    return dfs(0);
  }
}

// (s = "neetcode"), (wordDict = ["neet", "code"]);
s = "cars";
wordDict = ["car", "ca", "rs"];
// s = "cbca";
// wordDict = ["bc", "ca"];
new Solution().wordBreak(s, wordDict);
