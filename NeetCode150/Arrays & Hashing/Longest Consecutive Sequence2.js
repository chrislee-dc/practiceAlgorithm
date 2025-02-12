class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const val of set) {
      if (!set.has(val - 1)) {
        console.log(val);
        let count = 1;
        while (set.has(val + count)) {
          count += 1;
        }
        longest = Math.max(longest, count);
      }
    }
    return longest;
  }
}

console.log(new Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
