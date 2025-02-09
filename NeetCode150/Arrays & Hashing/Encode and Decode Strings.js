// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (const str of strs) {
      result += `${str.length}#` + str;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      let length = parseInt(str.slice(i, j));
      i = length + j + 1;
      result.push(str.slice(j + 1, length + j + 1));
    }

    return result;
  }
}

const newSolution = new Solution();
// const temp = newSolution.encode([""]);
const temp = newSolution.encode(["we", "say", ":", "yes", "!@#$%^&*()"]);
// const temp = newSolution.encode(["we","say",":","yes"]);
const temp2 = newSolution.decode(temp);
console.log(temp2);
