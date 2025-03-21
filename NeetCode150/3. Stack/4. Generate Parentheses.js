// Generate Parentheses
// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Example 1:

// Input: n = 1

// Output: ["()"]
// Example 2:

// Input: n = 3

// Output: ["((()))","(()())","(())()","()(())","()()()"]
// You may return the answer in any order.

// Constraints:

// 1 <= n <= 7

/**
 * ()
 *
 * (())
 * ()()
 */

//000111
//001011
//001101
//010011
//010101
//01

/**
 * 
step1 // 2
00
01

step2 // 3
000
001
010

step3
0001
0010
0011
0100
0101

step4
00011
00101
00110
01001
01010
 */

//
//
//

class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis2(n) {
    const result = [];
    // let
    const dp = (openBracket, closeBracket, stack) => {
      if (openBracket + closeBracket === n * 2) {
        result.push(stack);
        return;
      }

      if (openBracket < n) {
        dp(openBracket + 1, closeBracket, stack + "(");
      }

      if (closeBracket < openBracket) {
        dp(openBracket, closeBracket + 1, stack + ")");
      }
    };

    dp(0, 0, "");
    // console.log(result);
    return result;
  }
}

new Solution().generateParenthesis2(3);
