// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// const map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');

// const iterator1 = map1.keys();

// console.log(iterator1.next().value);
// // Expected output: "0"

// console.log(iterator1.next().value);
// // Expected output: 1

function findLowestPositiveInteger(nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let cp = nums[i] - 1;

    while (nums[i] > 0 && nums[i] <= n && nums[i] != nums[cp]) {
      let temp = nums[i];
      nums[i] = nums[cp];
      nums[cp] = temp;
      cp = nums[i] - 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
}

const a = [1, 2, 0];
const b = [3, 4, -1, 1];
const c = [7, 8, 9, 11, 12];

console.log(findLowestPositiveInteger(a));
console.log(findLowestPositiveInteger(b));
console.log(findLowestPositiveInteger(c));
