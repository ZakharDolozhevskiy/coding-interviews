// Given an array of integers nums sorted in ascending order,
// find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

const searchRange = (arr, target, start = 0, end = arr.length - 1) => {
  if (start === end && arr[start] !== target)
    return [-1, -1];

  if (start === end && arr[start] === target) {
    while (arr[end + 1] === target) end++;
    return [start, end];
  }

  let mid = start + (end - start) / 2 ^ 0;

  return arr[mid] < target
    ? searchRange(arr, target, mid + 1, end)
    : searchRange(arr, target, start, mid)
};
