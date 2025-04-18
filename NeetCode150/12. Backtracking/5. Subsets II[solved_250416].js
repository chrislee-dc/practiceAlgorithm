class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsetsWithDup(nums) {
    const res = [];

    nums.sort((a, b) => a - b);
    const backTracing = (curr, idx) => {
      res.push([...curr]);

      if (idx === nums.length) {
        return;
      }

      for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] === nums[i - 1]) {
          continue;
        }

        curr.push(nums[i]);
        backTracing(curr, i + 1);
        curr.pop();
      }
    };
    backTracing([], 0);
    return res;
  }
}

nums = [1, 2, 1];
new Solution().subsetsWithDup(nums);
