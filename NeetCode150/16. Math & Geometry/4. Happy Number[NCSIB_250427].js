const { executeSolution } = require("../../utils/executeSolution");

class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    if (n === 1) return true;
    let set = new Set();

    while (n !== 1) {
      n = this.sum(n);
      if (n === 1) {
        return true;
      }

      if (set.has(n)) {
        return false;
      }
      set.add(n);
    }
    return false;
  }

  sum(n) {
    let string = String(n).split("");
    let res = 0;
    for (let i = 0; i < string.length; i++) {
      res += string[i] ** 2;
    }
    return res;
  }
}

n = 101;

executeSolution(Solution, n);
