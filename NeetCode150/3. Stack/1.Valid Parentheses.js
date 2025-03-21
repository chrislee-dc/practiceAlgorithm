// Valid Parentheses
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:

// Input: s = "[]"

// Output: true
// Example 2:

// Input: s = "([{}])"

// Output: true
// Example 3:

// Input: s = "[(])"

// Output: false
// Explanation: The brackets are not closed in the correct order.

// Constraints:

// 1 <= s.length <= 1000

class NeetCodeSolution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const closeToOpen = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let c of s) {
      if (closeToOpen[c]) {
        if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }
    return stack.length === 0;
  }
}

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    if (!s.length || s.length % 2 !== 0) {
      return false;
    }

    const validBrackets = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    const validStartBrackes = ["(", "[", "{"];

    let result = "";

    for (let i = 0; i < s.length; i++) {
      if (validStartBrackes.includes(s[i])) {
        result += s[i];
      } else if (validBrackets[s[i]] !== result[result.length - 1]) {
        // console.log(result, result[result.length - 1], validBrackets[s[i]]);
        return false;
      } else {
        // console.log("🚀 ~ isValid ~ result:", result)
        result = result.slice(0, result.length - 1);
      }
    }

    return !result.length;
  }
}

const result = new Solution().isValid("((");
console.log("🚀 ~ result:", result);

// Example 1:
// Input: s = "[]"
// Output: true

// Example 2:
// Input: s = "([{}])"
// Output: true

// Example 3:
// Input: s = "[(])"
// Output: false

// ()[]{}
