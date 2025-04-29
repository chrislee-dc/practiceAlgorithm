var minSubArrayLen = function (target, nums) {
  let point1 = 0;
  let point2 = 0;
  let sum = 0;
  let res = Infinity;

  while (point1 < nums.length) {
    if (sum < target && point2 < nums.length) {
      sum += nums[point2];
      point2++;
    } else {
      if (sum >= target) {
        res = Math.min(point2 - point1, res);
      }
      sum -= nums[point1];
      point1++;
    }
  }

  return res === Infinity ? 0 : res;
};

(target = 7), (nums = [2, 3, 1, 2, 4, 3]);
minSubArrayLen(target, nums);
