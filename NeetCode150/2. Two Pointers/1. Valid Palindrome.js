// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacar o racatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

// console.log(
//   "Was it a car or a cat I saw?".toLowerCase().replace(/[^a-zA-Z]/g, "")
// );
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const filteredString = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
    const length =
      filteredString % 2 === 0
        ? filteredString.length / 2
        : Math.floor(filteredString.length / 2);

    for (let i = 0; i < length; i++) {
      if (filteredString[i] !== filteredString[filteredString.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

const a = new Solution().isPalindrome("0P");
console.log(a);

// ============================================================================================================
// This is the Neetcode solution
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) {
        l++;
      }
      while (r > l && !this.alphaNum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  /**
   * @param {char} c
   * @return {boolean}
   */
  alphaNum(c) {
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
    );
  }
}
