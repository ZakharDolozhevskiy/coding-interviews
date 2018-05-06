// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index,
// otherwise return-1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

const search = function(nums, target, start = 0, end = nums.length - 1) {
  if (start > end) return -1;

  let pivot = start + (end - start) / 2 ^ 0;
  
  if (nums[pivot] === target) return pivot;

  if (nums[start] <= nums[pivot]) {
    return nums[start] <= target && target < nums[pivot]
      ? search(nums, target, start, pivot - 1)
      : search(nums, target, pivot + 1, end);
  } else {
    return nums[end] >= target && target > nums[pivot]
      ? search(nums, target, pivot + 1, end)
      : search(nums, target, start, pivot - 1);
  }
};

// Second solution of this problem
const getPivot = (intervals, start = 0, end = intervals.length - 1) => {
  if (start > end) return -1;
  if (start === end) return start;

  const mid = start + (end - start) / 2 ^ 0;

  if (mid < end && intervals[mid] > intervals[mid + 1])
    return mid;
  if (mid > start && intervals[mid] < intervals[mid - 1])
    return mid - 1;

  return intervals[start] >= intervals[mid]
    ? getPivot(intervals, start, mid - 1)
    : getPivot(intervals, mid + 1, end);
};

const binarySearch = (intervals, target, start = 0, end = intervals.length - 1) => {
  if (start > end) return -1;

  const mid = start + (end - start) / 2 ^ 0;

  if (intervals[mid] === target)
    return mid;

  return intervals[mid] > target
    ? binarySearch(intervals, target, start, mid - 1)
    : binarySearch(intervals, target, mid + 1, end);
};

const search = (intervals, target) => {
  const pivot = getPivot(intervals);

  if (pivot === -1)
    return binarySearch(intervals, target);

  if (intervals[pivot] === target)
    return pivot;

  return intervals[0] <= target
    ? binarySearch(intervals, target, 0, pivot - 1)
    : binarySearch(intervals, target, pivot + 1, intervals.length - 1);
};