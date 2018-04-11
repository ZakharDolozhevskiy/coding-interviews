// Given an integer array, you need to find one continuous subarray that if you only sort this subarray
// in ascending order, then the whole array will be sorted in ascending order, too.
//
// You need to find the shortest such subarray and output its length.

// O(n)
const findUnsortedSubarray = array => {
  let stack = [];
  let left = array.length, right = 0;
  let i;

  // Find left boundary
  for (i = 0; i < array.length; i++) {
    while (stack.length && array[stack[stack.length - 1]] > array[i]) {
      left = Math.min(stack.pop(), left);
    }
    stack.push(i);
  }

  stack = [];

  // Find left boundary
  for (i = array.length - 1; i >= 0; i--) {
    while (stack.length && array[stack[stack.length - 1]] < array[i]) {
      right = Math.max(stack.pop(), right);
    }
    stack.push(i);
  }

  return right - left > 0 ? right - left + 1 : 0;
};

// O(NlogN)
const findUnsortedSubarray2 = array => {
  let sorted = array.slice().sort((a, b) => a - b);
  let start = array.length, end = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] != sorted[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end - start > 0 ? end - start + 1 : 0;
};
