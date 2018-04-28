/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  let k = m + n - 1,
      j = m - 1,
      i = n - 1;

  while (j > -1 && i > -1) {
    nums1[k--] = (nums1[j] > nums2[i]) ? nums1[j--] : nums2[i--];
  }

  while (i > -1) {
    nums1[k--] = nums2[i--];
  }
};