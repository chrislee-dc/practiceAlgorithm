class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const start = intervals.map((item) => item.start).sort((a, b) => a - b);
    const end = intervals.map((item) => item.end).sort((a, b) => a - b);

    let res = 0;
    let count = 0;
    let s = 0;
    let e = 0;

    while (s < intervals.length) {
      if (start[s] < end[e]) {
        s++;
        count++;
      } else {
        e++;
        count--;
      }
      res = Math.max(count, res);
    }
    return res;
  }
}
