// Daily Temperatures
// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example 1:

// Input: temperatures = [30,38,30,36,35,40,28]

// Output: [1,4,1,2,1,0,0]
// Example 2:

// Input: temperatures = [22,21,20]

// Output: [0,0,0]

/**
 * [2,1,1,3]
 */

// [2, 1, 1]

class Solution2 {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [_, stackInd] = stack.pop();
        res[stackInd] = i - stackInd;
      }
      stack.push([t, i]);
    }
    return res;
  }
}

class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const map = new Map();
    map.set(0, temperatures[0]);

    const pushResult = (i) => {
      const currValue = temperatures[i];
      const currIndex = i;
      // console.log({ currIndex, currValue });
      i--;
      while (i > -1) {
        // console.log(structuredClone(result), i, {index: i});
        if (map.get(i) < currValue) {
          result[i] = currIndex - i;
          map.delete(i);
        }
        i--;
      }
    };

    for (let i = 1; i < temperatures.length; i++) {
      map.set(i, temperatures[i]);
      if (temperatures[i - 1] < temperatures[i]) {
        pushResult(i);
      }
    }

    if (map.size) {
      pushResult(temperatures.length - 1);
    }

    // console.log(result);
    return result;
  }
}

new Solution().dailyTemperatures([30, 38, 30, 36, 35, 40, 28]);
