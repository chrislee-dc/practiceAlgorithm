// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:

// Input: s1 = "abc", s2 = "lecaabee"

// Output: false
// Constraints:

// 1 <= s1.length, s2.length <= 1000

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
      return false;
    }
    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);
    const aCharAt = "a".charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
      s1Count[s1.charCodeAt(i) - aCharAt]++;
      s2Count[s2.charCodeAt(i) - aCharAt]++;
    }

    let sameChar = 0;
    for (let i = 0; i < s1Count.length; i++) {
      if (s2Count[i] === s1Count[i]) {
        sameChar++;
      }
    }

    let j = 0;
    for (let i = s1.length; i < s2.length; i++) {
      if (sameChar === 26) {
        return true;
      }

      const newCharCode = s2.charCodeAt(i) - aCharAt;
      s2Count[newCharCode]++;
      if (s2Count[newCharCode] === s1Count[newCharCode]) {
        sameChar++;
      } else if (s1Count[newCharCode] + 1 === s2Count[newCharCode]) {
        sameChar--;
      }

      const oldCharCode = s2.charCodeAt(j) - aCharAt;
      s2Count[oldCharCode]--;
      if (s2Count[oldCharCode] === s1Count[oldCharCode]) {
        sameChar++;
      } else if (s1Count[oldCharCode] - 1 === s2Count[oldCharCode]) {
        sameChar--;
      }
      j++;
    }

    return sameChar === 26;
  }
}

console.log(new Solution().checkInclusion("abc", "lecabee"));
// s1 = "abc", s2 = "lecabee"
// s1 = "abc", s2 = "lecaabee"
