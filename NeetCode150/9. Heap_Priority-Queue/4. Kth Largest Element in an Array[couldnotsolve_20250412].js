class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  findKthLargest(nums, k) {
    k = nums.length - k;

    const quickSelect = (left, right) => {
      let pivot = nums[right];
      let p = left;
      for (let i = left; i < right; i++) {
        if (nums[i] <= pivot) {
          [nums[p], nums[i]] = [nums[i], nums[p]];
          p++;
        }
      }

      [nums[p], nums[right]] = [nums[right], nums[p]];

      if (k > p) {
        return quickSelect(p + 1, right);
      } else if (k < p) {
        return quickSelect(left, p - 1);
      } else {
        return nums[p];
      }
    };

    return quickSelect(0, nums.length - 1);
  }
}
