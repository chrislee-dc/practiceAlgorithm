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
  const sliceFunc = (newString, s1) => {
    console.log(newString, s1);

    let flag = true;
    newString.split("").reduce((acc, curr) => {
      // console.log(acc);
      // console.log(curr);
      // console.log(acc.slice(acc.indexOf(curr)));

      if (!acc.includes(curr)) {
        flag = false;
      }
      // acc.replace(curr, "");
      // console.log(result, curr)
      return acc.replace(curr);
    }, s1);

    return flag;
  };

  let tempString = s1;
  let newString = "";
  for (let i = 0; i < s2.length; i++) {
    if (!s1.includes(s2[i])) {
      tempString = s1;
      newString = "";
      continue;
    }

    // console.log(newString.indexOf(s2[i]) + 1, newString.length);
    if (
      newString.includes(s2[i]) &&
      newString.indexOf(s2[i]) + 1 < newString.length
    ) {
      console.log(newString);
      const temptemp = newString.slice(
        newString.indexOf(s2[i]) + 1,
        newString.length
      );
      newString = temptemp + s2[i];
      continue;
    }

    newString += s2[i];
    console.log(newString);

    if (newString.length === s1.length && sliceFunc(newString, s1)) {
      console.log(newString);
      // newString.filter(item => )

      console.log(s1.split("").every((item) => newString.includes(item)));
      return true;
    }
  }
  return false;
};

// console.log(sliceFunc("ooleh", "hello"));

const string1 = ["ab", "eidbaooo"];
const string2 = ["ab", "eidboaoo"];
const string3 = ["abc", "bbbca"];
const string4 = ["adc", "dcda"];
const string5 = ["hello", "ooolleoooleh"];

// console.log(checkInclusion(string1[0], string1[1]));
// console.log(checkInclusion(string2[0], string2[1]));
console.log(checkInclusion(string3[0], string3[1]));
// console.log(checkInclusion(string4[0], string4[1]));
// console.log(checkInclusion(string5[0], string5[1]));
