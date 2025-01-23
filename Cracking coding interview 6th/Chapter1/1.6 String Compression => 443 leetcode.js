// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length === 1) {
    return 1;
  }

  let write = 0; // Index to write the compressed characters
  let count = 1; // Count of consecutive characters

  for (let i = 1; i <= chars.length; i++) {
    // Check if the current character is different or it's the end of the array
    if (i === chars.length || chars[i] !== chars[i - 1]) {
      // Write the character
      chars[write] = chars[i - 1];
      write++;

      // Write the count if it's greater than 1
      if (count > 1) {
        for (let c of count.toString()) {
          chars[write] = c;
          write++;
        }
      }

      // Reset count for the next character
      count = 1;
    } else {
      count++;
    }
  }

  return write; // New length of the compressed arraylength;
};

const a = ["a", "a", "b", "b", "c", "c", "c"];
const b = ["a"];
const c = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];

console.log(compress(a));
console.log(compress(b));
console.log(compress(c));
