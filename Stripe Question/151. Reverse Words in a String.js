// 151. Reverse Words in a String
// Medium
// Topics
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWordsInAString(s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .reverse()
    .join(" ");
}

const a = "the sky is blue";
const b = "  hello world  ";
const c = "a good   example";

console.log(reverseWordsInAString(a));
console.log(reverseWordsInAString(b));
console.log(reverseWordsInAString(c));

function reverseWordsInAString2(string) {
  const splittedString = string.split(" ");
  let result = "";
  for (let i = 0; i < splittedString.length; i++) {
    if (!splittedString[i]) continue;
    result = splittedString[i] + " " + result;
  }

  return result.substring(0, result.length - 1);
}
