class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let [_, currEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      let [start, end] = intervals[i];

      if (start >= currEnd) {
        currEnd = end;
      } else {
        res++;
        currEnd = Math.min(currEnd, end);
      }
    }

    return res;
  }
}

intervals = [
  [1, 2],
  [2, 4],
  [1, 4],
];

intervals = [
  [1, 2],
  [1, 2],
  [1, 2],
];
intervals = [
  [1, 2],
  [2, 3],
];

intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

console.log(new Solution().eraseOverlapIntervals(intervals));
