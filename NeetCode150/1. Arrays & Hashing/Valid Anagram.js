// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

// BEST SOLUTION!!!
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sCount = Array(26).fill(0);
    const tCount = Array(26).fill(0);
    const aChar = "a".charCodeAt(0);
    console.log("a".charAt());

    for (let i = 0; i < s.length; i++) {
      sCount[s[i].charCodeAt() - aChar]++;
      tCount[t[i].charCodeAt() - aChar]++;
    }

    for (let i = 0; i < sCount.length; i++) {
      if (sCount[i] !== tCount[i]) return false;
    }
    return true;
  }
}

// console.log("a".charCodeAt(0));
