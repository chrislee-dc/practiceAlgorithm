class Solution {
  /**
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    let sum = 0;
    for (let i = 0; i < gas.length; i++) {
      sum += gas[i] - cost[i];
    }

    if (sum < 0) return -1;

    sum = 0;

    let result = 0;
    for (let i = 0; i < gas.length; i++) {
      sum += gas[i] - cost[i];

      if (sum < 0) {
        sum = 0;
        result = i + 1;
      }
    }
    return result;
  }
}
