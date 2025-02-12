class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (!nums.length) return 0;
    const sortedArr = [...new Set(nums)].sort((a, b) => a - b);
    console.log(sortedArr);

    const result = [0];
    for (let i = 1; i < sortedArr.length; i++) {
      if (sortedArr[i] === sortedArr[i - 1] + 1) {
        result[result.length - 1]++;
      } else {
        result.push(0);
      }
    }
    return result.sort()[result.length - 1] + 1;
  }
}

console.log(new Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
