class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, target) {
    const good = new Set();

    for (const t of triplets) {
      if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
        continue;
      }
      for (let i = 0; i < t.length; i++) {
        if (t[i] === target[i]) {
          good.add(i);
        }
      }
    }
    return good.size === 3;
  }
}
