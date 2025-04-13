// You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i] represents the start and the end time of the ith interval. intervals is initially sorted in ascending order by start_i.

// You are given another interval newInterval = [start, end].

// Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i and also intervals still does not have any overlapping intervals. You may merge the overlapping intervals if needed.

// Return intervals after adding newInterval.

// Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping.

// Example 1:

// Input: intervals = [[1,3],[4,6]], newInterval = [2,5]

// Output: [[1,6]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[9,10]], newInterval = [6,7]

// Output: [[1,2],[3,5],[6,7],[9,10]]
// Constraints:

// 0 <= intervals.length <= 1000
// newInterval.length == intervals[i].length == 2
// 0 <= start <= end <= 1000

class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    const res = [];

    for (const interval of intervals) {
      if (newInterval === null || interval[1] < newInterval[0]) {
        res.push(interval);
      } else if (interval[0] > newInterval[1]) {
        res.push(newInterval);
        res.push(interval);
        newInterval = null;
      } else {
        newInterval = [
          Math.min(interval[0], newInterval[0]),
          Math.max(interval[1], newInterval[1]),
        ];
      }
    }
    if (newInterval !== null) res.push(newInterval);
    return res;
  }
}

// (intervals = [
//   [1, 2],
//   [3, 5],
//   [9, 10],
// ]),
//   (newInterval = [6, 7]);

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// intervals = [[1,3],[6,9]], newInterval = [2,5]
(intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
]),
  (newInterval = [4, 8]);

console.log(new Solution().insert(intervals, newInterval));
