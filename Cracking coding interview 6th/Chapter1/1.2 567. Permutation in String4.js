// Given two strings s1 and s2, return true if s2 contains a
// permutation
//  of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

var checkInclusion = function (s1, s2) {
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

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  let j = 0;
  for (let i = s1.length; i < s2.length; i++) {
    if (matches === 26) {
      return true;
    }

    let s2CharCodeAt = s2.charCodeAt(i) - aCharAt;
    s2Count[s2CharCodeAt]++;
    // add
    if (s1Count[s2CharCodeAt] === s2Count[s2CharCodeAt]) {
      matches++;
    } else if (s1Count[s2CharCodeAt] + 1 === s2Count[s2CharCodeAt]) {
      matches--;
    }

    // minues
    s2CharCodeAt = s2.charCodeAt(j) - aCharAt;
    s2Count[s2CharCodeAt]--;
    if (s1Count[s2CharCodeAt] === s2Count[s2CharCodeAt]) {
      matches++;
    } else if (s1Count[s2CharCodeAt] - 1 === s2Count[s2CharCodeAt]) {
      matches--;
    }
    j++;
  }

  return matches === 26;
};

const string1 = ["ab", "eidbaooo"];
const string2 = ["ab", "eidboaoo"];
const string3 = ["abc", "abbbca"];
const string4 = ["adc", "dcda"];
const string5 = ["hello", "ooolleoooleh"];

console.log(checkInclusion(string1[0], string1[1]));
console.log(checkInclusion(string2[0], string2[1]));
console.log(checkInclusion(string3[0], string3[1]));
console.log(checkInclusion(string4[0], string4[1]));
console.log(checkInclusion(string5[0], string5[1]));
