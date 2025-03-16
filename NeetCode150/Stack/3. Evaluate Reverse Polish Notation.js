// Evaluate Reverse Polish Notation
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5
// Constraints:

// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].

class Solution {
  // constructor() {
  // this.calculation = ["+", "-", "*", "/"];
  // }
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      if (!isNaN(tokens[i])) {
        stack.push(tokens[i]);
        continue;
      }

      const a = parseInt(stack.pop());
      const b = parseInt(stack.pop());

      if (tokens[i] === "+") {
        stack.push(b + a);
      } else if (tokens[i] === "-") {
        stack.push(b - a);
      } else if (tokens[i] === "*") {
        stack.push(b * a);
      } else if (tokens[i] === "/") {
        stack.push(parseInt(b / a));
      }
    }
    return stack[0];
  }
}

// new Solution().evalRPN(["4", "13", "5", "/", "+"]);
// new Solution().evalRPN(["1", "2", "+", "3", "*"]);
// new Solution().evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
new Solution().evalRPN([
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
]);
