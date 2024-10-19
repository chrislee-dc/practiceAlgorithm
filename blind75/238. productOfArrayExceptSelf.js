console.clear();
// https://leetcode.com/problems/product-of-array-except-self/

// Given an integer array nums, 
// return an array answer such that answer[i] is equal 
// to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3, 1,2]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? 
// (The output array does not count as extra space for space complexity analysis.)



/**
 * [1,2,3,4,5]
 * [2,6,12,20]
 * [12,72,240]
 * 
 * output: [120, 60, 40, 30, 24]
 * 
 * [1,2,3,4]
 * [24,12,8,6]
 * [1,2,3], [0,2,3], [0,1,3], [0,1,2
 * 
 * 
 * [1,2,3]
 * 9 tiems
 * [6, 3, 2]
 */


// {
//     0: 6,
//     1: 3,
//     2: 2
// }

/**
 * TRY TO USE HASHMAP
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let ele = 1;
        for (let b = 0; b < nums.length; b++) {
            if(b === i) continue;
            ele *= nums[b]
        }
        result.push(ele)
    }
    return result;
};


// const arr = [-1,1,0,-3,3]
const arr = [1,2,3]

const result = productExceptSelf(arr)

console.log(result, 'result')
console.log(0 * -0, 'result2')