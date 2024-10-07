
console.clear();
// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
 
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2] 
// Output: true
// 23 23

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};

console.time()
const result = containsDuplicate( [1,2,3,4, 1] );
console.timeEnd()
console.log(result)

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const arr = [nums[0]]
//     for (let i = 1; i < nums.length; i++) {
//         if(arr.includes(nums[i])) return true;
//         arr.push(nums[i])
//     }
//     return false;
// };

// const result = containsDuplicate([1,1,1,3,3,4,3,2,4,2] );
// console.log(result)