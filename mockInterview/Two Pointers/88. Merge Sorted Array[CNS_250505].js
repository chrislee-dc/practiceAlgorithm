/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let firstArr = m - 1;
  let secondArr = n - 1;
  let totalIndex = m + n - 1;

  while (secondArr > -1) {
    if (firstArr > -1 && nums1[firstArr] > nums2[secondArr]) {
      nums1[totalIndex] = nums1[firstArr];
      firstArr--;
    } else {
      nums1[totalIndex] = nums2[secondArr];
      secondArr--;
    }
    totalIndex--;
  }
};

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
(nums1 = [1]), (m = 1), (nums2 = []), (n = 0);

merge(nums1, m, nums2, n);
