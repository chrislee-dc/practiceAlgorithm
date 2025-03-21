// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

class Solution2 {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
        count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }
      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }
    return Object.values(res);
  }
}

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const aCharCode = "a".charCodeAt();
    // const map = new Map();
    const strCounts = [];
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const strCount = Array(26).fill(0);
      for (let j = 0; j < str.length; j++) {
        strCount[str[j].charCodeAt() - aCharCode]++;
      }
      strCounts.push(strCount);
    }

    const result = [];
    const pushedIndex = [];
    for (let i = 0; i < strs.length; i++) {
      if (pushedIndex.includes(i)) continue;
      pushedIndex.push(i);
      result.push([strs[i]]);
      console.log(result, strs[i]);

      for (let j = i + 1; j < strs.length; j++) {
        // console.log(strCounts[i])
        if (pushedIndex.includes(j)) continue;
        if (strs[i].length !== strs[j].length) continue;
        if (
          strCounts[i].some(
            (count, countIndex) => count !== strCounts[j][countIndex]
          )
        ) {
          continue;
        }

        pushedIndex.push(j);
        result[result.length - 1].push(strs[j]);
      }
    }
    return result;
  }
}

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

const result = new Solution().groupAnagrams([
  "stop",
  "pots",
  "reed",
  "",
  "tops",
  "deer",
  "opts",
  "",
]);
console.log(result);
