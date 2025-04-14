class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function createIntervalTree(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(new Interval(arr[i][0], arr[i][1]));
  }
  return res;
}

module.exports = { createIntervalTree };
