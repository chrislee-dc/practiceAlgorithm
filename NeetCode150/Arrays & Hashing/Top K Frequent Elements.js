// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

/**
 * BUCKET SORT SOLUTIONS
 *
 */

// neetcode solution
var topKFrequent2 = function (nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => [2]);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  for (const n in count) {
    freq[count[n]].push(parseInt(n));
  }

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
};

// my solution
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (map.has(ele)) {
      map.set(ele, map.get(ele) + 1);
    } else {
      map.set(ele, 1);
    }
  }

  const map2 = new Map();
  for (const [key, value] of map) {
    if (map2.has(value)) {
      map2.set(value, [...map2.get(value), key]);
    } else {
      map2.set(value, [key]);
    }
  }

  let result = [];
  const map2Keys = [...map2.keys()].sort((a, b) => b - a);
  for (let i = 0; i < map2Keys.length; i++) {
    if (result.length >= k) return result.slice(0, k);
    result = [...result, ...map2.get(map2Keys[i])];
  }
  return result.slice(0, k);
};

console.log(topKFrequent2([3, 0, 1, 0], 1));
