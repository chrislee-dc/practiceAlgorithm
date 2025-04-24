class Solution {
  longestPalindrome(s) {
    if (s.length < 2) return s;
    let result = s[0];
    let findLongestPalindrome = (l, r) => {
      while (s[l] === s[r] && l >= 0 && r < s.length) {
        l--;
        r++;
      }
      return s.slice(l + 1, r);
    };

    for (let i = 0; i < s.length; i++) {
      let odd = findLongestPalindrome(l, r);
      let even = findLongestPalindrome(l, r + 1);

      let temp = odd.length > even.length ? odd : even;
      result = result.length > temp.length ? result : temp;
    }

    return result;
  }
}

s = "ababd";
new Solution().longestPalindrome(s);

// Input:

// Output: "bab"
