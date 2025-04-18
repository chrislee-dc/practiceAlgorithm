class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  partition(s) {
    const res = [];

    const dfs = (curr, index) => {
      if (index === s.length) {
        res.push([...curr]);
        return;
      }

      for (let i = index; i < s.length; i++) {
        const substr = s.slice(index, i + 1);
        if (this.isPalinDrome(substr)) {
          curr.push(substr);
          dfs(curr, i + 1);
          curr.pop();
        }
      }
    };

    dfs([], 0);
    return res;
  }

  isPalinDrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
const sol = new Solution();
console.log(sol.partition("aab"));
