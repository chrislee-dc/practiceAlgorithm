const { executeSolution } = require("../../utils/callSolutionMethod");

class Solution {
  /**
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  multiply(num1, num2) {
    if (!num1 === 0 || num2.length === 0) {
      return 0;
    }

    let res = Array(num1.length + num2.length + 1).fill(0);

    for (let i = num1.length - 1; i > -1; i--) {
      for (let j = num2.length - 1; j > -1; j--) {
        let multiply = num1[i] * num2[j];
        let sum = multiply + res[i + j + 1];
        res[i + j + 1] = sum % 10;
        res[i + j] += Math.floor(sum / 10);
      }
    }

    console.log(res.join(""));

    return res.join("").charCodeAt(0) === "0" ? res.slice(1) : res;
  }
}

(num1 = "111"), (num2 = "222");
executeSolution(Solution, num1, num2);
