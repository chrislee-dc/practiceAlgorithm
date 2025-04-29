const { executeSolution } = require("../../utils/callSolutionMethod");

class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    let recursion = (x, n) => {
      if (x === 0) return 0;
      if (n === 0) return 1;

      let res = recursion(x * x, Math.floor(n / 2));
      return n % 2 === 0 ? res : res * x;
    };
    let res = recursion(x, Math.abs(n));
    return n > 0 ? res : 1 / res;
  }
}

(x = 2.0), (n = 5);
executeSolution(Solution, x, n);
