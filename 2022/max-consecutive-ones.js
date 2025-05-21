// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the 
// last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Input: nums = [1,0,1,1,0,1]
// Output: 2

let nums = [1, 1, 0, 1, 1, 1];
let maxConsecutiveOne = 0;
let tempConsecutiveOne = 0;

for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (ele === 1) {
        tempConsecutiveOne++;
        if (tempConsecutiveOne > maxConsecutiveOne) {
            maxConsecutiveOne = tempConsecutiveOne;
        }
    } else {
        tempConsecutiveOne = 0;
    }
}

console.log("maxConsecutiveOne", maxConsecutiveOne);;




// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findMaxConsecutiveOnes = function(nums) {

// };
