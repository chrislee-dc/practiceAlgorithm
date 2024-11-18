console.clear()
// https://leetcode.com/problems/maximum-subarray/
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let processingSum = nums[0];
//     let largestSum = nums[0];

//     for (let ai = 1; ai < nums.length; ai++) {
//         processingSum += nums[ai];
        
        
//         if(largestSum < largestSum + nums[ai]) {
//             console.log(largestSum, nums[ai]);
//             largestSum += nums[ai]
//             console.log(largestSum, 'largestSum22');
//         }

//         if(nums[ai] > largestSum) {
//             largestSum = nums[ai];
//             processingSum = nums[ai];
//         }
//     }
//     return largestSum
// };

function maxSubArray(nums) {
    // [5,4,-1,7,8]
    // [-2,1,-3,4,-1,2,1,-5,4]

    /**
     *  [4,-1,2,1]
     * 
     * 
     */
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

/**
 *  9
 */



// const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
const result = maxSubArray([-2,1,-3,4, -1,2, 1])
console.log(result)

// const result2 = maxSubArray([1])
// console.log(result2)

// const result3 = maxSubArray([5, - 10,4,15,-1,7,8])
// console.log(result3)


// [-2,1,-3,4,-1,2,1,-5,15]



/** 
processingSum -2
largestSum -2

1



 */

// let 
// for (let ai = 0; ai < array.length; ai++) {
//     const element = array[ai];
    
// }