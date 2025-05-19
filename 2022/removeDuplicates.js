// Remove Duplicates from Sorted Array

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2,
//  with the first two elements of nums being 1 and 2 respectively.
//   It doesn't matter what you leave beyond the returned length.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  console.log("nums:", nums);

  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

let result = removeDuplicates(nums);
