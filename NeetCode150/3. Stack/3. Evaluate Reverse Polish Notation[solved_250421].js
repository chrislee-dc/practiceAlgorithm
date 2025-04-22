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
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const allOperations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => {
        return a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
      },
    };

    const stack = [];

    let i = 0;
    while (i < tokens.length) {
      console.log(stack);
      if (allOperations[tokens[i]]) {
        const ele1 = stack.pop();
        const ele2 = stack.pop();
        stack.push(+allOperations[tokens[i]](ele2, ele1));
      } else {
        stack.push(+tokens[i]);
      }
      i++;
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
