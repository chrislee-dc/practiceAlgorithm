console.clear()

// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.



// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

/** 4
 * max 96
 * min -48
 * 
 * 1. 2 * 3 = 6
 * 2. 6 * -2 = - 12
 */

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Example 3:
// Input: nums = [-2,0,-1, -1]
// Output: 1

// Example 4:
// Input: nums = [2,2,2]
// Output: 8

// Example 5:
// Input: nums = [2,2,2, -2]
// Output: 8

// Example 6:
// Input: nums = [2,2,2, -2, -2]
// Output: 32


// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    console.clear()
    let maxSum = Math.max(...nums)
    let curMin = 1
    let curMax = 1
    for (let i = 0; i < nums.length; i++) {  
        // console.log(nums[i], 'nums[i] 3535')
        if (nums[i] === 0) {
            curMin = 1
            curMax = 1
            continue
        } 
        tmp = curMax * nums[i]
        curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
        curMin = Math.min(tmp, curMin * nums[i], nums[i])
        maxSum = Math.max(maxSum, curMax)
        console.log('nums[i] ', nums[i]) 
        console.log('curMax ', curMax)
        console.log('curMin ', curMin)  
        console.log('maxSum ', maxSum)
        console.log('---------------------')  
    }

    return maxSum
};
const g = [2,-5,-2,-4,3]
//  
// 
// 
/**
 * -2
 * -5 10
 * -10 20
 * max = 2
 * min = - 10
 * 
 * 1. 2 * -5 - 10
 * 2. -2
 * 3. -4
 */

// const a = [2,3,-2,4]
// const a = [2, 3, -2, 4]
// const b = [-2, 0, -1]
// const c = [-2, 0, -1, -1]
// const d = [2, 2, 2]
// const e = [2, 2, 2, -2]
// const f = [2, 2, 2, -2, Z-2]
// const resultA = maxProduct(a)
// const resultb = maxProduct(b)
// const resultc = maxProduct(c)
// const resultd = maxProduct(d)
// const resulte = maxProduct(e)
// const resultf = maxProduct(f)
const resultg = maxProduct(g)
console.log({ resultg }, 'resultA')
// console.log({ resultA, resultb, resultc, resultd, resulte, resultf, resultg }, 'resultA')

// [2,3,-2,4]   => 6
// [-2,0,-1]    => 0
// [-2,0,-1, -1]=> 1
// [2,2,2]      => 8
// [2,2,2,-2]   => 8
// [2,2,2,-2,-2]=> 32



// var maxSubArray = function(nums) {
//     let maxSoFar = nums[0];
//  let maxEndingHere = nums[0];

//  for (let i = 1; i < nums.length; i++) {
//      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
//      maxSoFar = Math.max(maxSoFar, maxEndingHere);
//  }

//  return maxSoFar;
// };

